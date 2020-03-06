module.exports = function (sequelize, dataTypes) {
    var Moments = sequelize.define('moments', {
        // making the table here
        moments: dataTypes.STRING,
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }

    }, {});
    Moments.associate = function (models) {
        Moments.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Moments;
};