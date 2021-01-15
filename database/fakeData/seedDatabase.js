const Sequelize = require('sequelize');
const db = require('../connection.js');
db.overview = require('../models/overview.model.js');  //overview model/table
db.icons = require('../models/icons.model.js');  //icons model/table
const overviewData = require('./overviewDummyData.js');
const iconsData = require('./iconsDummyData.js');

//inserts 100 records (a mix of complete and partial) into overviews table in database
for(let i = 0; i < 100; i++) {
  if( i % 2 === 0) {
    let newRecord = overviewData.generateOneRecord();
    db.overview.addRecord(newRecord);
  } else {
    let newRecord = overviewData.generatePartialRecord();
    db.overview.addRecord(newRecord)
  }
}

//insert icons into icon table
//iconsData is an array of objects, each object is one record to be added into icons table
iconsData.forEach((icon) => db.icons.addNewIcon(icon));