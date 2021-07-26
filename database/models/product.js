'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category,{
        as:'category',
        foreignKey: 'category_id'
      });
      Product.belongsTo(models.Brand,{
        as:'brand',
        foreignKey: 'brand_id'
      });
      Product.hasMany(models.Image,{
        as:'image',
        foreignKey: 'product_id'
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    stock: DataTypes.DECIMAL,
    brand_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};