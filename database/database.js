// this root database file
const Sequelize = require('sequelize');

const { gt, lte, ne, in: opIn } = Sequelize.Op;
const db = require('./connection.js');
db.overview = require('./models/overview.model.js'); // overview model/table
db.icons = require('./models/icons.model.js'); // icons model/table
const overviewData = require('./fakeData/overviewDummyData.js');
const iconsData = require('./fakeData/iconsDummyData.js');

// join table creation
db.overview.belongsToMany(db.icons, { through: 'overview_icons' });
db.icons.belongsToMany(db.overview, { through: 'overview_icons' });

// NOTE: for queries, I want "eager loading" using the "include" option

const addToOverview = () => {
  const promises = [];
  for (let i = 0; i < 101; i++) {
    if (i % 2 === 0) {
      const newRecord = overviewData.generateOneRecord(i);
      promises.push(db.overview.upsert(newRecord));
    } else {
      const newRecord = overviewData.generatePartialRecord(i);
      promises.push(db.overview.upsert(newRecord));
    }
  }
  return Promise.all(promises)
    .then(() => {
      console.log('SUCCESS AFTER PROMISE ALL:');
    })
    .catch((err) => {
      console.log('FAILURE AFTER PROMISE ALL: ', err);
    });
};

const addToIcons = async () => {
  await iconsData.forEach((icon) => db.icons.addNewIcon(icon));
};

const seedingFunction = () => {
  addToOverview()
    .then(() => {
      addToIcons();
    })
    .then(() => {
      return db.overview.findAll({
        where: {
          product_id: {
            [lte]: 100,
          },
        },
      });
    })
    .then((allRecords) => {
      for (let i = 0; i < allRecords.length; i++) {
        const currentRecord = allRecords[i];
        for (let j = 0; j <= 3; j++) {
          const randomIconId = overviewData.randomNumberGenerator({ min: 1, max: 13 });
          db.icons.findByPk(randomIconId)
            .then((icon) => {
              currentRecord.addIcon(icon);
            });
        }
      }
    })
    .catch((err) => console.log('🥎🥎🥎🥎🥎🥎🥎🥎🥎🥎ERROR IN NEW FUNCTION: ', err));
};

// create tables based off models and associations
db.sync()
// db.sync({ force: true })
  .then(() => {
    seedingFunction();
  })
  .then(() => {
    console.log('SUCCESS🥎🥎🥎🥎🥎🥎🥎🥎🥎🥎');
  })
  .catch(() => console.log('ERROR🥎🥎🥎🥎🥎🥎🥎🥎🥎🥎'));
// module.exports = { returnProductAndIcons }
