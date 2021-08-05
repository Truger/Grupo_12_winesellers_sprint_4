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
        foreignKey: 'categoryId'
      });
      Product.belongsTo(models.Brand,{
        as:'brand',
        foreignKey: 'brandId'
      });
      Product.belongsTo(models.Size,{
        as:'size',
        foreignKey: 'sizeId'
      });
      Product.belongsToMany(models.Image,{
        as:'image',
        foreignKey: 'imageId'
      });
      Product.belongsTo(models.OrderDetail,{
        as:'orderdetail',
        foreignKey: 'orderdetailId'
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    brands_id: DataTypes.INTEGER,
    categories: DataTypes.INTEGER,
    sizes_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};