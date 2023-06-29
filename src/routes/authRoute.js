const express = require('express');
const LoginController = require('../controllers/LoginController');


const route = express.Router();

route.post('/login', LoginController.login);
route.post('/save', LoginController.createLogin);

module.exports = route;
