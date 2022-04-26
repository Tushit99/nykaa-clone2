const express = require('express');

const cors = require("cors")

const userController = require('./controllers/user.controllers');
const kajalController = require('./controllers/kajal.controllers');
const perfumeController = require('./controllers/perfume.controllers');
const menController = require('./controllers/men.controllers');
const hairController = require('./controllers/hair.controllers');
const faceController = require('./controllers/face.controllers');
const app = express();

app.use(express.json());

app.use(cors());

const { register, login } = require('./controllers/auth.controllers');


app.use('/users', userController);
app.use('/kajal', kajalController);
app.use('/perfume', perfumeController);
app.use('/men', menController);
app.use('/hair', hairController);
app.use('/face', faceController);

app.post('/register', register);
app.post('/login', login);

module.exports = app;