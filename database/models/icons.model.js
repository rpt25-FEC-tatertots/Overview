/* eslint-disable no-console */
const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

// define model/table
const Icons = sequelize.define('icons', {
  icon_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  icon_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  icon_svg: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  icon_description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  xmlns: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Icons.addNewIcon = async (newIcon) => {
  try {
    await Icons.create(newIcon);
    await console.log('SUCCESSFULLY ADDED ICON');
  } catch (error) {
    console.log('FAILED ADDING ICON: ', error);
  }
};

module.exports = Icons;
