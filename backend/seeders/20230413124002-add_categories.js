'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name:'Feminine',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'For man',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Neutral',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }

};
