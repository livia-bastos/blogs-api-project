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

const findAll = async () => {
  const returnedUsers = await User.findAll({ attributes: ['email', 'displayName', 'image'] });
  return returnedUsers;
};

const findUserById = async (id) => {
  const user = await User.findAll({
    attributes: ['id', 'email', 'displayName', 'image'], 
    where: {
    id,
  },
});
  return user[0];
};

module.exports = {
  postUser,
  findByEmail,
  findAll,
  findUserById,
};