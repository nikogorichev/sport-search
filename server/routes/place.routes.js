const router = require('express').Router();
const { Place } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const allPlace = await Place.findAll();
    res.status(200).json(allPlace);
  })
  .post(async (req, res) => {
    const {title, address, description} = req.body
    const newPlace = await Place.create({title, address, description});
    res.status(200).json(newPlace);
  });

module.exports = router;
