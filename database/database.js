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

const firstRecord = {
  product_id: 1,
  product_description: 'A warm, easy-wearing fleece jacket made of recycled polyester double-sided solid shearling. Fair Trade Certified™ sewn.',
  feature1_title: '100% Recycled Polyester Fleece',
  feature1_description: '100% recycled polyester double-sided solid shearling fleece for easy-wearing warmth',
  feature2_title: 'Full-Length Zipper with Stand-up Collar',
  feature2_description: 'Full-zip jacket for easy venting with a zip-through stand-up collar for heat-trapping comfort',
  feature3_title: 'Raglan Sleeve Construction',
  feature3_description: 'Raglan sleeves allow the full range of natural shoulder mobility and pack-wearing comfort',
  feature4_title: 'Pocket Details',
  feature4_description: 'Left-chest pocket and two front pockets feature webbing zipper pulls',
  feature5_title: 'Skin-Friendly Spandex Trim',
  feature5_description: 'Cuffs and hem have spandex trim for smooth comfort on the skin',
  feature6_title: 'Flat-Seam Construction',
  feature6_description: 'Flat-seam construction reduces bulk and helps minimize seam chafe',
  weight: '680 g (24 oz)',
};

const secondRecord = {
  product_id: 2,
  product_description: 'Our technical pants feature a wide waistband and are made from lightweight, four-way stretch-woven fabric for comfort and freedom of movement. Fair Trade Certified™ sewn.',
  feature1_title: 'Lightweight Recycled Polyester/Recycled Spandex',
  feature1_description: 'Lightweight recycled polyester/recycled spandex with a soft-knit waistband and a DWR (durable water repellent) finish',
  feature2_title: 'Knitted, Elasticized Waistband',
  feature2_description: 'Knitted, elasticized waistband allows for mobility and comfort',
  feature3_title: 'Pocket Details',
  feature3_description: 'Two front drop-in handwarmer pockets with tonal double-needle stitch detail; two rear pockets (one with a secure zipper)',
  feature4_title: 'Partially Elasticized Cuffs at Ankle',
  feature4_description: 'Partially elasticized cuffs at the ankles can be pushed up to calves',
  feature5_title: 'Regular Rise',
  feature5_description: 'Regular (mid) rise',
  feature6_title: 'Supporting the People Who Made This Product',
  feature6_description: 'Fair Trade Certified™ sewn',
  weight: '252 g (8.9 oz)',
};

const thirdRecord = {
  product_id: 3,
  product_description: 'A classic, lightweight flannel shirt made with premium organic cotton for long-lasting wear.',
  feature1_title: 'Soft, 100% Organic Cotton Flannel',
  feature1_description: 'Made with durable, midweight 100% organic cotton garment-washed flannel twill',
  feature2_title: 'Traditional, Button-Front Design',
  feature2_description: 'Traditional long-sleeved, button-front collared shirt has the look and feel for any situation',
  feature3_title: 'Passport-Compatible Pocket',
  feature3_description: 'Left-chest pocket with single-button flap closure; passport compatible',
  feature4_title: 'Shirttail Hem',
  feature4_description: 'A shirttail hem keeps your shirt in place during movement and stays put under a hip belt',
  feature5_title: null,
  feature5_description: null,
  feature6_title: null,
  feature6_description: null,
  weight: '318 g (11.2 oz)',
};

const addToOverview = () => {
  const promises = [];
  for (let i = 4; i < 101; i++) {
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
  db.overview.upsert(firstRecord)
    .then(() => {
      db.overview.upsert(secondRecord);
    })
    .then(() => {
      db.overview.upsert(thirdRecord);
    })
    .then(() => {
      addToOverview();
    })
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
