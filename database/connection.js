/* eslint-disable no-console */
// this file is responsible for MySQL connection

const { Sequelize } = require('sequelize');
const token = require('./database.config.js');

// creates the database
const sequelize = new Sequelize({
  database: 'fec_microservices',
  username: token.username,
  password: token.password,
  dialect: 'mysql',
});

// test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// export
module.exports = sequelize;
