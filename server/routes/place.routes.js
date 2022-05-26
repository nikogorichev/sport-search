const router = require('express').Router();
const { Place } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const allPlace = await Place.findAll();
    res.status(200).json(allPlace)
  })

module.exports = router;