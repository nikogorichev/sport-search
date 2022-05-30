/* eslint-disable no-throw-literal */
/* eslint-disable camelcase */
const router = require('express').Router();
const { Place, Photoplace } = require('../db/models');

router
  .route('/')
  .get(async (req, res) => {
    const allPlace = await Place.findAll({ raw: true });
    const allImage = await Photoplace.findAll({ raw: true });
    res.status(200).json([allPlace, allImage]);
  })
  .post(async (req, res) => {
    const {
      title, address, description, product,
    } = req.body;

    const newPlace = await Place.create({
      title,
      address,
      description,
      raw: true,
    });

    await Photoplace.create({
      url: product.img1,
      place_id: newPlace.id,
    });

    await Photoplace.create({
      url: product.img2,
      place_id: newPlace.id,
    });

    await Photoplace.create({
      url: product.img3,
      place_id: newPlace.id,
    });

    const images = await Photoplace.findAll({ where: { place_id: newPlace.id }, raw: true });

    res.status(200).json([newPlace, images]);
  });

module.exports = router;
