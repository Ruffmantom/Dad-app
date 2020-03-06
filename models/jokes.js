module.exports = function (sequelize, dataTypes) {
    const Jokes = sequelize.define("jokes", {
        jokes: dataTypes.STRING(500),
    }, {});
    Jokes.associate = function (models) {
        Jokes.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    };
    return Jokes;
};