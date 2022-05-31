
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
  // .post(async (req, res) => {
  //   const { title, address, description } = req.body;
  //   const newPlace = await Place.create({ title, address, description });
  //   res.status(200).json(newPlace);
  // });
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
