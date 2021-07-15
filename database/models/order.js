'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.OrderDetails,{
        as:'orderdetails',
        foreignKey: 'orderdetailsId'
      });
      Order.belongsTo(models.payment,{
        as:'payment',
        foreignKey: 'paymentId'
      });
      Order.belongsTo(models.orderStatus,{
        as:'orderstatus',
        foreignKey: 'orderstatusId'
      });
  
    }
  };
  order.init({
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};