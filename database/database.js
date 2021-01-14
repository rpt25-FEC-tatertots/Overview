//this root database file
const Sequelize = require('sequelize');
const db = require('./connection.js');
db.overview = require('./models/overview.model.js');  //overview model/table
db.icons = require('./models/icons.model.js');  //icons model/table
const dummyData = require('./fakeData/overviewDummyData.js');

//join table creation
db.overview.belongsToMany(db.icons, {through: 'overview_icons'});
db.icons.belongsToMany(db.overview, {through: 'overview_icons'});



//create tables based off models and associations
db.sync()
.then(() => console.log('SUCCESS'))
.catch(() => console.log('ERROR'))

//NOTE: for queries, I want "eager loading" using the "include" option

//generate fake data and add to database
// const newRecord = dummyData.generateOneRecord();
// console.log('ARRAY IS ARRAY: ', typeof(newRecord))
// console.log('NEW RECORD: ',newRecord)
// db.overview.addRecord(newRecord);

for(let i = 0; i <= 100; i++) {
  let newRecord = dummyData.generateOneRecord();
  db.overview.addRecord(newRecord);
}