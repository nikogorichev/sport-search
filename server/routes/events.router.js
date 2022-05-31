const router = require('express').Router();

const {
  Event, Sport, Place, User, Participant,
} = require('../db/models');

router.get('/', async (req, res) => {

  const { user } = req.session;

  const events = await Event.findAll();
  const sports = await Sport.findAll();
  const places = await Place.findAll();
  const allUsers = await User.findAll();
  //все события, в которых участвует юзер
  const participants = await Participant.findAll({ where: { user_id: user.id } });
  //все связи юзер-событие, в котором он участвует
  const allParticipants = await Participant.findAll({ raw: true });
  const participant = await Participant.findAll({ where: { user_id: user.id }, raw: true });
  // Достаем и создаем массив нужных айди евентов
  const arr = [];
  const partArr = participant.map((el) => arr.push(el.EventId));
  const userEvents = await Event.findAll({ where: { id: arr }, raw: true });

  res.json({
    events, sports, places, participants, allParticipants, userEvents, allUsers,
  });
});

router.post('/', async (req, res) => {
  const {
    title, date, description, members_count, user_id, sport_id, place_id, cost,
  } = req.body;
  const sportId = await Sport.findOne({ where: { title: sport_id } });
  const placeId = await Place.findOne({ where: { title: place_id } });
  const newEvent = await Event.create({
    title, date, description, members_count, cost, user_id, sport_id: sportId.id, place_id: placeId.id,
  });
  res.json(newEvent);
});

// Удаление события
router.delete('/', async (req, res) => {
  const { user_id, event_id } = req.body;
  const event = await Event.destroy({ where: { id: event_id } });
  res.json({ user_id, event_id });
});

router.put('/', async (req, res) => {
  const {
    title, date, description, members_count, user_id, sport_id, place_id, cost, event,
  } = req.body;
  const sportId = await Sport.findOne({ where: { title: sport_id } });
  const placeId = await Place.findOne({ where: { title: place_id } });

  const newEvent = await Event.update({
    title, date, description, members_count, cost, user_id, sport_id: sportId.id, place_id: placeId.id,
  }, { where: { id: event } });
  const updateEvent = await Event.findOne({ where: { id: event } });
  res.json(updateEvent);
});

module.exports = router;
