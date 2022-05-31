const router = require('express').Router();
const { User, Sport, Userssport } = require('../db/models');

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

module.exports = router;
