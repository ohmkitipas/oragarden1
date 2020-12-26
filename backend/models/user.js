module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
      email: {
         type: DataTypes.STRING(255),
         unique: true
        },
        password: {
           type: DataTypes.STRING(255),
        },
        name: {
           type: DataTypes.STRING(255),
        },
        lastName: {
           type: DataTypes.STRING(255),
        },
        tell: {
           type: DataTypes.INTEGER,
        },
        address: {
           type: DataTypes.STRING(1000),
        },
        permit: {
           type: DataTypes.STRING(255),
        }
    },
    {
        tableName: 'users'
    });
    User.associate = models => {
        User.belongsToMany(models.Product, { through: models.OrderList, foreignKey: 'user_id' });
        //User.hasMany(models.OrderList, { foreignKey: 'user_id'});
    }

    return User;
};