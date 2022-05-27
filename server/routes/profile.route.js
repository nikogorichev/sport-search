const router = require('express').Router();
const { User, Sport } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const { user } = req.session;
    const allUserSports = await User.findAll({
      where: { id: user.id },
      include: [{ model: Sport }],
    });
    // const sportId = await Userssport.findAll({
    // include: { model: Sport }, where: { user_id: user.id } });

    // console.log(allUsersSports);
    res.status(200).json( allUserSports);
    // res.status(200).send(JSON.stringify({ userSports }, undefined, 4))
  });

module.exports = router;
