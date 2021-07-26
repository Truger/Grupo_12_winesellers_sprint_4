'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     Example:
      await queryInterface.bulkInsert('Users', [{
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vino celeste',
        description: 'vino de mesa dulce para tomar en la tarde',
        price: 23,
        stock: 10,
        brand_id:1,
        category_id:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
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
