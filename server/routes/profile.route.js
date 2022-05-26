const router = require('express').Router();
const { User, Sport } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const allUsers = await User.findAll();
    const allUsersSports = await Sport.findAll({ include: User });
    res.status(200).json({ allUsers, allUsersSports });
  });

module.exports = router;

// if (req.session.User) {
//   const { id } = req.session.User;
//   const user = await User.findOne({ where: { id }, raw: true });

// } else {
//   return res.redirect('/');
// }
