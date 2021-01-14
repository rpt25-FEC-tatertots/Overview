const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

//define model/table
const Overview = sequelize.define('overview', {
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  feature1_tite: {
    type: Sequelize.STRING,
    allowNull: false
  },
  feature1_description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  feature2_tite: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature2_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature3_tite: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature3_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature4_tite: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature4_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature5_tite: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature5_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature6_tite: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature6_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Overview;