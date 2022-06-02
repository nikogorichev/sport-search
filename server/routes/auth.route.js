const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
  const {
    name, email, password,
  } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    res.status(401).json({
      error: 'Такой email уже зарегистрирован',
    });
  } else {
    const newUser = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
    req.session.user = newUser;
    res.status(201).json(newUser);
  }
});

router.post('/login', async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ where: { name } });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.user = user;
    res.status(201).json(user);
  } else {
    res.status(401).json({
      error: 'Неверный пароль или логин',
    });
  }
});

router.get('/checkauth', (req, res) => {
  const { user } = req.session;
  if (user) {
    res.status(201).json(user);
  } else {
    res.redirect('/login');
  }
});

router.get('/logout', (req, res) => {
  const { user } = req.session;
  if (user) {
    req.session.destroy();
    res.clearCookie('sid');
    res.status(201).json({});
  } else {
    res.status(201).json({error: 'Авторизуйтесь'})
  }
});

module.exports = router;
