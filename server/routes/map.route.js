const router = require('express').Router();
const { Place } = require('../db/models/place');

router.route('/')
  .get(async (req, res) => {
    const point = await Place.findAll({ raw: true });
    res.json({ point });
  });

module.exports = router;