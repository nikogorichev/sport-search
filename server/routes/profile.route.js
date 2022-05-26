const router = require('express').Router();
const { User } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const allUsers = await User.findAll();
    res.status(200).json({ allUsers });
  });

module.exports = router;

// if (req.session.User) {
//   const { id } = req.session.User;
//   const user = await User.findOne({ where: { id }, raw: true });

// } else {
//   return res.redirect('/');
// }
