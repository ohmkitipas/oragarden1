module.exports = (sequelize, DataTypes) => {
    const WaterLevel = sequelize.define('WaterLevel',{
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
        tableName: 'waterLevels'
    }

    );
    WaterLevel.associate = models => {
        WaterLevel.hasMany(models.Product, {foreignKey: 'water_id'});
    };
    return WaterLevel
};