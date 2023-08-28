const jwt = require('jsonwebtoken');
const { loginService } = require('../service');

const { JWT_SECRET } = process.env;

const postLogin = async (req, res) => {
  const user = await loginService.postLogin(req.body);
  if (user.length !== 0) {
    const token = jwt.sign(req.body, JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  }
  return res.status(400).json({ message: 'Invalid fields' }); 
};

module.exports = {
postLogin,
};