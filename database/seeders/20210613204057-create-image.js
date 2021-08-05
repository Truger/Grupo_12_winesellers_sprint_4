'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   Example:
      await queryInterface.bulkInsert('Images', [{
        name: 'product1627274469837.jpg',
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'product1627274469837.jpg',
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'product1627274469837.jpg',
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'product1627274469837.jpg',
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'product1627274469837.jpg',
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'product1627274469837.jpg',
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      name: 'product1627274469837.jpg',
      product_id: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'product1627274469837.jpg',
      product_id: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },], 
    {});
    
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
