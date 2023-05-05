'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name:'ONE OF A KIND',
        image:'https://cdn.shopify.com/s/files/1/0017/6436/0239/files/MJ_ONE_OF_A_KIND-01_512x.png?v=1648317697',
        categoryId: 1,
        price: 20000,
        description: 'ngfjjytuigm',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'WHITE ROSE',
        image: 'https://cdn.shopify.com/s/files/1/0017/6436/0239/files/MJ_WHITE_ROSE_01_512x.png?v=1648317843',
        categoryId: 2,
        price: 24000,
        description: 'jhgikuyhkuiu',
        quantity: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }

};
