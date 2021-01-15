const Sequelize = require('sequelize');
const sequelize = require('../connection.js');
const dummyData = require('../fakeData/overviewDummyData.js');

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
    allowNull: true
  },
  feature1_title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature1_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature2_title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature2_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature3_title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature3_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature4_title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature4_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature5_title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature5_description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  feature6_title: {
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

Overview.addRecord = (newEntry) => {
  //add this new entry to the table
  console.log('FIRED')
  Overview.create(newEntry)
    .then(() => console.log('SUCCESSFULLY ADDED TO DATABASE'))
    .catch((error) => console.log('FAILED ADDING TO DATABASE', error))
};

// Overview.addRecord = async (newEntry) => {
//   try {
//     await Overview.create(newEntry);
//     console.log('SUCCESSFULLY ADDED TO DATABASE')
//   } catch (error) {
//     console.log('FAILED: ', error)
//   }
// };


Overview.retrieveOneProduct = async (incomingId) => {
  try {
    let retrievedRecord = await Overview.findOne({where: {product_id: incomingId}})
    console.log('RETRIEVED RECORD: ', retrievedRecord)
    return retrievedRecord;
  } catch (error) {
    console.log('FAILED RETRIEVING RECORD: ', error)
  }
}


module.exports = Overview;