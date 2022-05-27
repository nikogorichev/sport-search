const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
});

router.post('/', async (req, res) => {
  // const {title, date, description, members_count, cost} = req.body;
  // const newEvent = await Event.create({
  //   title, date, description, members_count, cost
  // });
  res.json({ message: 'YA NORM' });
});

module.exports = router;
