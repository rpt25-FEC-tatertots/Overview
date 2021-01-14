//this root database file
const Sequelize = require('sequelize');
const db = require('./connection.js');
db.overview = require('./models/overview.model.js');  //overview model/table
db.icons = require('./models/icons.model.js');  //icons model/table

//join table creation
db.overview.belongsToMany(db.icons, {through: 'overview_icons'});
db.icons.belongsToMany(db.overview, {through: 'overview_icons'});

//create tables based off models and associations
db.sync({force: true})
  .then(() => console.log('SUCCESS'))
  .catch(() => console.log('ERROR'))

//NOTE: for queries, I want "eager loading" using the "include" option