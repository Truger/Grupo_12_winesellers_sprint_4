'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
Example:
      await queryInterface.bulkInsert('Stores', [{
        name: 'mercadonegro',
        email: 'mercadonegro@demo.com',
        role: 2,
        password:'admin123',
        phone:'1132059010',
        adress:'rauch 1019',
        description:'tienda online de productos electronicos',
        photo:'',
        userId:1,
        condition:1,
        createdAt: new Date(),
        updatedAt: new Date()
        }], {});
    
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
