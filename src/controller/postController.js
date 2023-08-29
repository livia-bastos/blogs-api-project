const jwt = require('jsonwebtoken');
const { postService } = require('../service');

const { JWT_SECRET } = process.env;

const createPost = async (req, res) => {
  const registeredUser = await postService.findByEmail(req.body.email);
  if (registeredUser.length !== 0) {
 return res.status(409).json({ message: 'User already registered' }); 
}
  const { displayName, email } = await postService.postUser(req.body);
  const token = jwt.sign({ displayName, email }, JWT_SECRET, {
    expiresIn: '1h',
  });
  return res.status(201).json({ token });
};

const getAllPosts = async (req, res) => {
  const posts = await postService.findAll();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const user = await postService.findUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
createPost,
getAllPosts,
getPostById,
};