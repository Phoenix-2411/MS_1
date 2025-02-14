require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.POSTGRES_DB_USERNAME,
    "password": process.env.POSTGRES_DB_PASSWORD,
    "database": process.env.POSTGRES_DB_NAME,
    "host": process.env.POSTGRES_DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}