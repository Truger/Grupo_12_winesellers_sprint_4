'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   Example:
      await queryInterface.bulkInsert('Brands', [{
        name: 'Alta vista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'alamos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Angelica zapata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Catena Zapata',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'D.V Catena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Saint Felicien',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      name: 'Luigi Bosca',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'La Linda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Los Nobles',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Altas Cumbres',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lagarde',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'rutini',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Trumpeter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Etchart Armaldo B.',
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
