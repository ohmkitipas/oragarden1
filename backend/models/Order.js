module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
     totalPrice:{
        type: DataTypes.DECIMAL
     }
    },
    {
        tableName: 'orders'
    });
     Order.associate = models => {
      Order.hasMany(models.OrderList, { foreignKey: 'order_id'});
    };

    return Order;
};