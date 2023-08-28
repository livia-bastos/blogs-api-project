const route = require('express').Router();
const { loginController } = require('../controller');
const { validateLogin } = require('../middlewares/loginMiddleware');

route.post(
  '/',
  validateLogin,
  loginController.postLogin,
);

module.exports = route;