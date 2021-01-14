const Sequelize = require('sequelize');
const db = require('../connection.js');
db.overview = require('../models/overview.model.js');  //overview model/table
db.icons = require('../models/icons.model.js');  //icons model/table
const dummyData = require('./overviewDummyData.js');

//inserts 100 records (a mix of complete and partial) into overviews table in database
for(let i = 0; i < 100; i++) {
  if( i % 2 === 0) {
    let newRecord = dummyData.generateOneRecord();
    db.overview.addRecord(newRecord);
  } else {
    let newRecord = dummyData.generatePartialRecord();
    db.overview.addRecord(newRecord)
  }
}