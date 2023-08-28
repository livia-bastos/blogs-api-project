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

module.exports = {
postUser,
};