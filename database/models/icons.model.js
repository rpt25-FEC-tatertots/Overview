const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

//define model/table
const Icons = sequelize.define('icons', {
  icon_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  icon: {
    type: Sequelize.STRING, //to be determined
    allowNull: false
  },
  icon_description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});



module.exports = Icons;

