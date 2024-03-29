'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('blog_posts');
   
  }
};
