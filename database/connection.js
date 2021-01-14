//this file is responsible for MySQL connection

const { Sequelize } = require('sequelize');


//creates the database
const sequelize = new Sequelize({
  database: 'fec_microservices',
  username: 'root',
  password: null,
  dialect: 'mysql'
});

//test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


//export
module.exports = sequelize;