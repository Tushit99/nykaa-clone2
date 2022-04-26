const express = require('express');

const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const authorise = require('../middlewares/authorise');

const Hair = require('../models/hair.models');

router.post('',authenticate, authorise,  async (req, res) => {
  req.body.user_id = req.userID;
  try {
    const hair = await Hair.create(req.body);
    return res.status(200).send(hair);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

router.get('', async (req, res) => {
  try {
    const hair = await Hair.find().lean().exec();
    return res.status(200).send(hair);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

module.exports = router;