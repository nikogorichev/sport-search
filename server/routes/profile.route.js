const router = require('express').Router();
const util = require('util');
const path = require('path');
const { User, Sport, Userssport } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const { user } = req.session;
    const allUserSports = await User.findAll({
      where: { id: user.id },
      include: [{ model: Sport }],
    });
    // console.log(allUserSports[0].Sports)
    res.status(200).json(allUserSports);
  })

  .put(async (req, res) => {
    const { user } = req.session;
    const {
      name, email, description, photo,
    } = req.body;
    try {
      const updatedUser = await User.update({
        name, email, description, photo,
      }, { where: { id: user.id }, returning: true, raw: true });
      const [, [newSession]] = updatedUser;
      req.session.user = newSession;
      res.status(200).json(updatedUser);
    } catch (err) {
      res.sendStatus(500);
    }
  });

router.route('/:id')
  .delete(async (req, res) => {
    const { id } = req.params;
    const { user } = req.session;

    await Userssport.destroy({ where: { id } });

    const allUserSports = await User.findAll({
      where: { id: user.id },
      include: [{ model: Sport }],
    });
    res.status(200).json(allUserSports);
  });

// Загрузка фотографии
// router.post('/', async (req, res) => {
//   try {
//     const { user } = req.session;
//     const { file } = req.files;
//     const fileName = file.name;
//     const size = file.data.length;
//     const extension = path.extname(fileName);

//     const allowedExtensions = /png|jpeg|jpg|gif/;

//     if (!allowedExtensions.test(extension)) {
//       console.log(err);
//     }

//     if (size > 5000000) throw 'File must be less then 5MB';

//     const { md5 } = file;
//     const URL = `/uploads${md5}${extension}`;
//     await util.promisify(file.mv)(`../public${URL}`);

//     const userPhoto = await User.update({
//       photo: URL,
//     }, { where: { id: user.id }, returning: true, raw: true });

//     res.json(userPhoto);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

module.exports = router;
