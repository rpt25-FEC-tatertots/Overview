//this root database file
const Sequelize = require('sequelize');
const {gt, lte, ne, in: opIn} = Sequelize.Op;
const db = require('./connection.js');
db.overview = require('./models/overview.model.js');  //overview model/table
db.icons = require('./models/icons.model.js');  //icons model/table
const overviewData = require('./fakeData/overviewDummyData.js');
const iconsData = require('./fakeData/iconsDummyData.js');


//join table creation
db.overview.belongsToMany(db.icons, {through: 'overview_icons'});
db.icons.belongsToMany(db.overview, {through: 'overview_icons'});



//create tables based off models and associations
db.sync()
// db.sync({force: true})
.then(() => console.log('SUCCESS'))
.catch(() => console.log('ERROR'))

//NOTE: for queries, I want "eager loading" using the "include" option



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
};

const addToIcons = async () => {
  await iconsData.forEach((icon) => db.icons.addNewIcon(icon));
}

addToOverview()
  .then(() => {
    addToIcons();
  })
  .then(() => {
    return db.overview.findAll({where: {
      product_id: {
        [lte]: 100
        }
      }
    });
  })
  .then((allRecords) => {
    for (let i = 0; i < allRecords.length; i++) {
      let currentRecord = allRecords[i]
      for (let j = 0; j <= 3; j++) {
        let randomIconId = overviewData.randomNumberGenerator({min: 1, max: 13});
        db.icons.findByPk(randomIconId).then((icon) => {
                  currentRecord.addIcon(icon);
        })
      }
    }
  })
  .catch(err => console.log('🥎🥎🥎🥎🥎🥎🥎🥎🥎🥎ERROR IN NEW FUNCTION: ', err))