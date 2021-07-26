'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 Example:
      await queryInterface.bulkInsert('Categories', [{
        name: 'Blancos',
         },
      {
        name: 'Blend',
      },
      {
        name: 'Dulces',
      },
      {
        name: 'Rosados',
      },
      {
        name: 'Tintos',
      },
      {
        name: 'Espumantes',
      },
    {
      name: 'Esporituosas',
    },
    {
      name: 'Cervezas',
    },
    {
      name: 'Whiskys',
    },
    {
      name: 'Accesorios',

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
