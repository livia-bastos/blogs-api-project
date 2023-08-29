const route = require('express').Router();
const { postController } = require('../controller');
const { validateToken } = require('../middlewares/tokenMiddleware');

route.post(
  '/',
  validateToken,
  postController.createPost,
);

route.get(
  '/',
  validateToken,
  postController.getAllPosts,
);

module.exports = route;