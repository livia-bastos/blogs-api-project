const { User } = require('../models');

const postUser = async (user) => {
  const { dataValues } = await User.create(user);
  return dataValues;
};

const findByEmail = async (email) => {
  const returnedUser = await User.findAll({
    where: {
      email,
    },
  });
  return returnedUser;
};

module.exports = {
  postUser,
  findByEmail,
};