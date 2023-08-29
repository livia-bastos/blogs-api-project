const route = require('express').Router();
const { categoriesController } = require('../controller');
const { validateToken } = require('../middlewares/tokenMiddleware');

route.post(
  '/',
  validateToken,
  categoriesController.postCategory,
);

route.get(
  '/',
  validateToken,
  categoriesController.getAllCategories,
);

module.exports = route;