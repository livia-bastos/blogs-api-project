const { Category } = require('../models');

const postCategory = async (name) => {
  const { dataValues } = await Category.create(name);
  return dataValues;
};

const findByName = async (name) => {
  const returnedName = await Category.findAll({
    where: {
      name,
    },
  });
  return returnedName;
};

const findAll = async () => {
  const returnedCat = await Category.findAll({ attributes: ['name'] });
  return returnedCat;
};

const findCatById = async (id) => {
  const category = await Category.findAll({
    attributes: ['id', 'name'], 
    where: {
    id,
  },
});
  return category[0];
};

module.exports = {
  postCategory,
  findByName,
  findAll,
  findCatById,
};
