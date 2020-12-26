module.exports = (sequelize, DataTypes) => {
    const Level = sequelize.define('Level',{
        name: {
            type: DataTypes.STRING(255),
        },
        description: {
            type: DataTypes.STRING(1000),
        },
        img_logo: {
            type: DataTypes.STRING(255),
        }
    },
    {
        timestamps: false
      },
    {
        tableName: 'levels'
    }

    );
    Level.associate = models => {
        Level.hasMany(models.Product, {foreignKey: 'level_id'});
    };
    return Level;
};