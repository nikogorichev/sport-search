const router = require('express').Router();
const { User, Sport } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const { user } = req.session;
    const allUserSports = await User.findAll({
      where: { id: user.id },
      include: [{ model: Sport }],
    });
    res.status(200).json(allUserSports);
  })

  .put(async (req, res) => {
    const { user } = req.session;
    const {
      name, email, description,
    } = req.body;
    try {
      const updatedUser = await User.update({
        name, email, description,
      }, { where: { id: user.id }, returning: true, raw: true });
      const [, [newSession]] = updatedUser
      req.session.user = newSession
      res.status(200).json(updatedUser);
    } catch (err) {
      res.sendStatus(500);
    }
  });
// .delete(async (req, res) => {
//   const allUserSports = await User.findAll({
//     where: { id: user.id },
//     include: [{ model: Sport }],
//   });

// });

module.exports = router;
