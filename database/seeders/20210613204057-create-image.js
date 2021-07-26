'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   Example:
      await queryInterface.bulkInsert('Brands', [{
        name: 'product1627272461895.jpg',
        product_id: 1
      },
      {
        name: 'product1627272461895.jpg',
        product_id: 2
      },
      {
        name: 'product1627272461895.jpg',
        product_id: 3
      },
      {
        name: 'product1627272461895.jpg',
        product_id: 4
      },
      {
        name: 'product1627272461895.jpg',
        product_id: 5
      },
      {
        name: 'product1627272461895.jpg',
        product_id: 6
      },
    {
      name: 'product1627272461895.jpg',
      product_id: 7
    },
    {
      name: 'product1627272461895.jpg',
      product_id: 8
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
