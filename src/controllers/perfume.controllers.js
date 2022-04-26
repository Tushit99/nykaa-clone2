const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const authorise = require('../middlewares/authorise');

const Perfume = require('../models/perfume.models');

router.post('', authenticate, authorise, async (req, res) => {
  console.log('asdfasdf')
  req.body.user_id = req.userID;
  try {
    const perfume = await Perfume.create(req.body);
    return res.status(200).send(perfume);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get('', async (req, res) => {
  try {
    const perfume = await Perfume.find().lean().exec();
    // console.log(perfume)
    return res.status(200).send(perfume);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;