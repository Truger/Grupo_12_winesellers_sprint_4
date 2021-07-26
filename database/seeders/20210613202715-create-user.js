'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     Example:
      await queryInterface.bulkInsert('Users', [{
        first_name: 'Matias',
        last_name: 'Davila',
        username: 'Davila',
        email: 'admin@gmail.com',
        password:'$2a$10$h70vph4heCVpkarmJErYmOXCJo.K.FTedh.19UpB9BQeva5HbzFoO',
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
