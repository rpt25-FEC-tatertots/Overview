//this root database file
const Sequelize = require('sequelize');
const db = require('./connection.js');
db.overview = require('./models/overview.model.js');  //overview model/table
db.icons = require('./models/icons.model.js');  //icons model/table
const dummyData = require('./fakeData/overviewDummyData.js');

//join table creation
db.overview.belongsToMany(db.icons, {through: 'overview_icons'});
db.icons.belongsToMany(db.overview, {through: 'overview_icons'});

//practicing adding one association to the join table
const addToJoinTable =  () => {
  return db.overview.findByPk(1)
    .then((product) => {
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

// addToJoinTable();

//create tables based off models and associations
// db.sync()
db.sync({force: true})
.then(() => console.log('SUCCESS'))
.catch(() => console.log('ERROR'))

//NOTE: for queries, I want "eager loading" using the "include" option