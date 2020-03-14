module.exports = function (sequelize, dataTypes) {
    const Jokes = sequelize.define("jokes", {
        jokes: dataTypes.STRING(500),
        username: dataTypes.STRING(500)
    });


    return Jokes;
};