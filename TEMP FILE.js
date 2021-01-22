/* eslint-disable no-undef */
const db = require('./connection.js');
db.icons = require('./models/icons.model.js');
db.overview = require('./models/overview.model.js');

db.overview.belongsToMany(db.icons, { through: 'overview_icons' });
db.icons.belongsToMany(db.overview, { through: 'overview_icons' });

test('Retrieves icons and product information from database', () => {
  const productNum = 5;

  expect(typeof db.overview.findByPk(productNum, { include: [db.icons] })).toBe('object');
});

test('Retrieves correct product from DB', async () => {
  const productNum = 5;

  const data = await db.overview.findByPk(productNum, { include: [db.icons] });

  const retrievedProductId = data.dataValues.product_id;
  expect(retrievedProductId).toBe(5);
  db.close();
});
