const { User } = require('../models');

const postLogin = async (userData) => {
  const user = User.findAll({
    where: {
      email: userData.email,
      password: userData.password,
    },
  });
  return user;
};

module.exports = {
  postLogin,
};