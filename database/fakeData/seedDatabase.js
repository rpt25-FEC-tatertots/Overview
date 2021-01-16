const Sequelize = require('sequelize');
const db = require('../connection.js');
db.overview = require('../models/overview.model.js');  //overview model/table
db.icons = require('../models/icons.model.js');  //icons model/table
const overviewData = require('./overviewDummyData.js');
const iconsData = require('./iconsDummyData.js');


//inserts 100 records (a mix of complete and partial) into overviews table in database
const addToOverview = async () => {
    for(let i = 0; i < 100; i++) {
    if( i % 2 === 0) {
      let newRecord = overviewData.generateOneRecord();
      await db.overview.create(newRecord);
    } else {
      let newRecord = overviewData.generatePartialRecord();
      await db.overview.create(newRecord)
    }
  }
}


//populate join table
//this function adds one record to the join table
const addToJoinTable =  () => {
  console.log('🥎🥎🥎🥎🥎🥎🥎🥎🥎🥎')
  return db.overview.findByPk(2)
    .then((product) => {
      console.log('🥶 PRODUCT: ', product)
      return db.icons.findByPk(4).then((icon) => {
        product.addIcon(icon);
      })
    })
    .then(() => {
      console.log('SUCCESS IN JOIN TABLE ADDITION')
    })
    .catch((error) => {
      console.log('ERROR IN JOIN TABLE ADDITION: ', error)
    })
}

//for each product, add 0 - 3 icons



db.overview.belongsToMany(db.icons, {through: 'overview_icons'});
db.icons.belongsToMany(db.overview, {through: 'overview_icons'});


// populateDatabase()
addToOverview()
  .then(() => {
    iconsData.forEach((icon) => db.icons.addNewIcon(icon));
  })
  .then(() => addToJoinTable())
  .catch(err => console.log('ERROR IN NEW FUNCTION: ', err))



