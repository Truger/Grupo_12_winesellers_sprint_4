'use strict';
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    Product.belongsTo(models.Brand,{
      as:'brand',
      foreignKey: 'brandId'
    });
    Product.belongsTo(models.Category,{
        as:'category',
        foreignKey: 'categoryId'
    });
    Product.belongsTo(models.Size,{
      as:'size',
      foreignKey: 'sizeId'
    });
    Product.belongsTo(models.Name,{
      as:'name',
      foreignKey: 'nameId'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
