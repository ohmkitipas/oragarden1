module.exports = (sequelize, DataTypes) => {
    const OrderList = sequelize.define('OrderList', {
        productName: {
           type: DataTypes.STRING(255),
        },
        productPrice: {
           type: DataTypes.DECIMAL
        },
        amount:{
           type: DataTypes.INTEGER
        }
    },
    {
      tableName: 'orderLists'
    });

    OrderList.associate = models => {
       /*OrderList.belongsTo(models.Product, {foreignKey: 'product_id'})
       OrderList.belongsTo(models.Order, {foreignKey: 'order_id'})
       OrderList.belongsTo(models.User, {foreignKey: 'user_id'})*/
       OrderList.belongsTo(models.Order, { foreignKey: 'order_id'});
   
    };

    return OrderList;
};

