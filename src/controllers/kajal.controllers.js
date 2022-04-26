const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const authorise = require('../middlewares/authorise');

const Kajal = require('../models/kajal.models');

router.post('',authenticate, authorise,  async (req, res) => {
  req.body.user_id = req.userID;
  try {
    const kajal = await Kajal.create(req.body);
    return res.status(200).send(kajal);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get('', async (req, res) => {
  try {
    const kajal = await Kajal.find().lean().exec();
    console.log(kajal);
    return res.status(200).json(kajal);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;