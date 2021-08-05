'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 Example:
      await queryInterface.bulkInsert('Categories', [{
        name: 'Blancos',
        createdAt: new Date(),
        updatedAt: new Date()
         },
      {
        name: 'Blend',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dulces',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rosados',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tintos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Espumantes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      name: 'Esporituosas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cervezas',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Whiskys',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Accesorios',
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
