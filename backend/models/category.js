module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
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
        tableName: 'categories'
    }

    );
    Category.associate = models => {
        Category.hasMany(models.Product, { foreignKey: 'category_id'});
    };

    return Category;
};