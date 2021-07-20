'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   Example:
      await queryInterface.bulkInsert('Brands', [{
        name: 'genius',
      },
      {
        name: 'noga',
      },
      {
        name: 'netmak',
      },
      {
        name: 'philips',
      },
      {
        name: 'blobal',
      },
      {
        name: 'logitech',
      },
    {
      name: 'tecnobive',
    },
    {
      name: 'starwave',
    },
    {
      name: 'LG',
    },
    {
      name: 'sony',
    },
    {
      name: 'lenovo',
    },
    {
      name: 'Hp',
    },
    {
      name: 'wester Digital',
    },
    {
      name: 'sandisk',
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
