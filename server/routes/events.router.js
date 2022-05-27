const router = require('express').Router();
const { Event, Sport, Place } = require('../db/models');

router.get('/', async (req, res) => {
  const events = await Event.findAll();
  const sports = await Sport.findAll();
  const places = await Place.findAll();
  console.log('OKK');
  res.json({ events, sports, places });
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

module.exports = router;
