'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     Example:
      await queryInterface.bulkInsert('Users', [{
        first_name: 'Matias',
        last_name: 'Davila',
        username: 'Davila',
        email: 'mipcomputacion@gmail.com',
        password:'0c909a141f1f2c0a1cb602b0b2d7d050',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
