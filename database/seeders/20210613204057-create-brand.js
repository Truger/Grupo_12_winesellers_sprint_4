'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   Example:
      await queryInterface.bulkInsert('Brands', [{
        name: 'Alta vista',
      },
      {
        name: 'alamos',
      },
      {
        name: 'Angelica zapata',
      },
      {
        name: 'Catena Zapata',
      },
      {
        name: 'D.V Catena',
      },
      {
        name: 'Saint Felicien',
      },
    {
      name: 'Luigi Bosca',
    },
    {
      name: 'La Linda',
    },
    {
      name: 'Los Nobles',
    },
    {
      name: 'Altas Cumbres',
    },
    {
      name: 'Lagarde',
    },
    {
      name: 'rutini',
    },
    {
      name: 'Trumpeter',
    },
    {
      name: 'Etchart Armaldo B.',
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
