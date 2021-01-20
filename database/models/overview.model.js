const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

// define model/table
const Overview = sequelize.define('overview', {
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  product_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature1_title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  feature1_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature2_title: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature2_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature3_title: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature3_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature4_title: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature4_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature5_title: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature5_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature6_title: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  feature6_description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Overview.addRecord = async (newEntry) => {
  try {
    await Overview.create(newEntry);
    console.log('SUCCESSFULLY ADDED TO DATABASE');
  } catch (error) {
    console.log('FAILED: ', error);
  }
};

Overview.retrieveOneProduct = async (incomingId) => {
  try {
    const retrievedRecord = await Overview.findOne({ where: { product_id: incomingId } });
    console.log('RETRIEVED RECORD: ', retrievedRecord);
    return retrievedRecord;
  } catch (error) {
    console.log('FAILED RETRIEVING RECORD: ', error);
  }
};

module.exports = Overview;
