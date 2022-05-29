/* eslint-disable camelcase */
const router = require('express').Router();

const {
  Participant,
} = require('../db/models');

router.post('/', async (req, res) => {
  const { user_id, event_id } = req.body;
  const participant = await Participant.create({ user_id, EventId: event_id });
  res.json(participant);
});

router.delete('/', async (req, res) => {
  const { user_id, event_id } = req.body;
  const participant = await Participant.destroy({ where: { user_id, EventId: event_id } });
  console.log('DESTROYYYY', participant);
  res.json({ user_id, event_id });
});

module.exports = router;
