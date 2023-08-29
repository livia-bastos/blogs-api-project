// const jwt = require('jsonwebtoken');
const { categoryService } = require('../service');

// const { JWT_SECRET } = process.env;

const postCategory = async (req, res) => {
  if (!req.body.name) {
 return res.status(400).json({ message: '"name" is required' }); 
}
  const { id, name } = await categoryService.postCategory(req.body);

  return res.status(201).json({ id, name });
};

const getAllCategories = async (req, res) => {
  const category = await categoryService.findAll();
  return res.status(200).json(category);
};

module.exports = {
postCategory,
getAllCategories,
};