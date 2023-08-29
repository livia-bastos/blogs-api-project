const PostCategoriesModel = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategories', {
    post_id: {type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
    category_id: { type: DataTypes.INTEGER, primaryKey: true, foreignKey: true },
  }, { underscored: true, timestamps: false, tableName: 'PostCategories' });

  // PostCategories.associate = (models) => {
  //   models.Book.belongsToMany(models.User, {
  //     as: 'users',
  //     through: UserBook,
  //     foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
  //     otherKey: 'userId', // se refere a outra chave de `users_books`
  //   });
  //   models.User.belongsToMany(models.Book, {
  //     as: 'books',
  //     through: UserBook,
  //     foreignKey: 'userId', // se refere ao id de User na tabela de `users_books`
  //     otherKey: 'bookId',
  //   });
  // };
    

  return PostCategories;

};

module.exports = PostCategoriesModel;