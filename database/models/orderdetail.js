'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetail.belongsTo(models.Product,{
        as:'product',
        foreignKey: 'product_id'
      });
      OrderDetail.belongsTo(models.Order,{
        as:'order',
        foreignKey: 'order_id'
      });
    }
  };
  OrderDetail.init({
    quantity: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    products_id: DataTypes.INTEGER,
    orders_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};