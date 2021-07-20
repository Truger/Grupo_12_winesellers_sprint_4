'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 Example:
      await queryInterface.bulkInsert('Categories', [{
        name: 'audio',
         },
      {
        name: 'video',
      },
      {
        name: 'teclados',
      },
      {
        name: 'mouses',
      },
      {
        name: 'insumos',
      },
      {
        name: 'toner',
      },
    {
      name: 'auriculares',
    },
    {
      name: 'memorias',
    },
    {
      name: 'camaras',
    },
    {
      name: 'cartuchos',
    },
    {
      name: 'herramientas',
    },
    {
      name: 'monitores',
    },
    {
      name: 'computadoras',
    },
    {
      name: 'placas de video',
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
