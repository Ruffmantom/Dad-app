module.exports = {
  "development": {
    "username": "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": "dadDB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": process.env.MYSQL_PASSWORD,
    "database": "dadDB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "JAWS_DB",
    "dialect": "mysql"
  }
}