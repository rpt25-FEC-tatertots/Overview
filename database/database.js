const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'microservices',
  username: 'root',
  password: null,
  dialect: 'mysql'
});