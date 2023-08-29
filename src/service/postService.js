const { BlogPost, Category, User } = require('../models');

const postUser = async (user) => {
  const { dataValues } = await BlogPost.create(user);
  return dataValues;
};

const findByEmail = async (email) => {
  const returnedUser = await BlogPost.findAll({
    where: {
      email,
    },
  });
  return returnedUser;
};

const findAll = async () => {
  const returnedPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'email', 'displayName', 'image'] },
      { model: Category, as: 'categories' }] });
  console.log('==================>', returnedPosts);
  return returnedPosts;
};

const findUserById = async (id) => {
  const user = await BlogPost.findAll({
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