module.exports = function (sequelize, dataTypes) {
    var Moments = sequelize.define('moments', {
        // making the table here
        userName: dataTypes.STRING,
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
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Moments.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Moments;
};