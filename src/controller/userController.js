const jwt = require('jsonwebtoken');
const { userService } = require('../service');

const { JWT_SECRET } = process.env;

const postUser = async (req, res) => {
  const registeredUser = await userService.findByEmail(req.body.email);
  if (registeredUser.length !== 0) {
 return res.status(409).json({ message: 'User already registered' }); 
}
  const { displayName, email } = await userService.postUser(req.body);
  const token = jwt.sign({ displayName, email }, JWT_SECRET, {
    expiresIn: '1h',
  });
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const users = await userService.findAll();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
postUser,
getAllUsers,
getUserById,
};