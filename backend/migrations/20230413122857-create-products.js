'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async(queryInterface, Sequelize) => {
      await queryInterface.createTable('Products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
        },
        image:{
          type: Sequelize.STRING
        },
        categoryId:{
          allowNull:false,
          type:Sequelize.INTEGER,
          references:{model:'Categories', key:'id'}
        },
        price:{
          type: Sequelize.INTEGER,
        },
        description:{
          type:Sequelize.STRING
        },
        quantity:{
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
  },

   down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};

