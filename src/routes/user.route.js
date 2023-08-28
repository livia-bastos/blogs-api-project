const route = require('express').Router();
const { userController } = require('../controller');
const { validateUser } = require('../middlewares/userMiddleware');

route.post(
  '/',
  validateUser,
  userController.postUser,
);

module.exports = route;