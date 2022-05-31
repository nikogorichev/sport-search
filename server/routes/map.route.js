const router = require('express').Router();
const { Place } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const point = await Place.findAll({ raw: true, attributes: ['address'] });
    res.send( point );
  });

module.exports = router;


// переписать запрос на параметризированный!????!!!!
// Даня, Лена препод.