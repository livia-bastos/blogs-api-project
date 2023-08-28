const route = require('express').Router();
const { userController } = require('../controller');
const { validateUser } = require('../middlewares/userMiddleware');
const { validateToken } = require('../middlewares/tokenMiddleware');

route.post(
  '/',
  validateUser,
  userController.postUser,
);

route.get(
  '/',
  validateToken,
  userController.getAllUsers,
);

route.get(
  '/:id',
  validateToken,
  userController.getUserById,
);

module.exports = route;