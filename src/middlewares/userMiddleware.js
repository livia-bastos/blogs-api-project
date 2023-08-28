const validateUser = (req, res, next) => {
  const { email, password, displayName } = req.body;
  if (displayName.length < 8) { 
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' }); 
  }
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  validateUser,
};