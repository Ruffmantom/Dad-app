module.exports = function (sequelize, dataTypes) {
    var Moments = sequelize.define('Moments', {
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
    });

    return Moments;
};