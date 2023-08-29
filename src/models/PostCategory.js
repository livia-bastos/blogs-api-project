const PostCategoriesModel = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategory', {
    postId: {type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
  }, { underscored: true, timestamps: false, tableName: 'PostCategories' });

  PostCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategories,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'category',
      through: PostCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
    

  return PostCategories;

};

module.exports = PostCategoriesModel;