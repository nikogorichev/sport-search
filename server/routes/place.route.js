/* eslint-disable camelcase */
const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const { Place, Photoplace } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const allPlace = await Place.findAll();
    res.status(200).json(allPlace);
  })
  // .post(async (req, res) => {
  //   const { title, address, description } = req.body;
  //   const newPlace = await Place.create({ title, address, description });
  //   res.status(200).json(newPlace);
  // });
  .post(async (req, res) => {
    const {
      title, address, description,
    } = req.body;
    // const { image } = req.files;
    const newPlace = await Place.create({
      title, address, description,
    });
    console.log(newPlace);
    // const link = `${uuid.v4()}.jpg`;
    // image.mv(path.resolve(process.env.PWD, 'img', link));
    // const pathToFile = path.join('img', link);
    // const newImage = await Photoplace.create({
    //   url: pathToFile,
    //   place_id,
    // });
    res.status(200).json(newPlace);
  });

module.exports = router;

// router.post('/addImage', async (req, res) => {
//   const { image } = req.files;
//   const { place_id } = req.body;
//   const link = `${uuid.v4()}.jpg`;
//   image.mv(path.resolve(process.env.PWD, 'img', link));
//   const pathToFile = path.join('img', link);
//   const newImage = await Photoplace.create({
//     url: pathToFile,
//     place_id,
//   });
//   res.status(200).json(newImage);
// });
