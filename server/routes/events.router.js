const router = require('express').Router();
const { Event } = require('../db/models');

router.get('/', async (req, res) => {
  const events = await Event.findAll();
  console.log('OKK');
  res.json(events);
});

router.post('/', async (req, res) => {
  // const {title, date, description, members_count, cost} = req.body;
  // const newEvent = await Event.create({
  //   title, date, description, members_count, cost
  // });
  console.log('OKIOKIOKI');
  res.json({ message: 'YA NORM' });
});

module.exports = router;
