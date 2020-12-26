module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',{
        name: {
           type: DataTypes.STRING(255),
        },
        detail: {
           type: DataTypes.STRING(1000),
        },
        Price: {
           type: DataTypes.DECIMAL,
        },
        img1: {
           type: DataTypes.STRING(255),
        },
        img2: {
           type: DataTypes.STRING(255),
        },
        img3: {
           type: DataTypes.STRING(255),
        },
        img4: {
           type: DataTypes.STRING(255,)
        },
        img5: {
           type: DataTypes.STRING(255),
        }
    },
    {
      timestamps: false
    },
    {
        tableName: 'products'
    });
    Product.associate = models => {
        Product.belongsTo(models.Category, {foreignKey: 'category_id'});
        Product.belongsTo(models.Level, {foreignKey: 'level_id'});
        Product.belongsTo(models.WaterLevel, { foreignKey: 'water_id'});
        Product.belongsToMany(models.User, {through: models.OrderList, foreignKey: 'product_id'});
        //Product.hasMany(models.OrderList, { foreignKey: 'product_id'});
        
    };

    return Product;
};