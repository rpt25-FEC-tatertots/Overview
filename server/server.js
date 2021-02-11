const express = require('express');
const cors = require('cors');
const axios = require('axios');

const db = require('../database/connection.js');
db.icons = require('../database/models/icons.model.js');
db.overview = require('../database/models/overview.model.js');
// const queries = require('../database/database.js');

const app = express();

app.use('/:product_id', express.static('./public/dist'));
app.use(express.static('./public/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

db.overview.belongsToMany(db.icons, { through: 'overview_icons' });
db.icons.belongsToMany(db.overview, { through: 'overview_icons' });

app.get('/overview/:product_id', async (req, res) => {
  const productNum = req.params.product_id;
  const data = {};
  try {
    const overviewInfo = await db.overview.findByPk(productNum, { include: [db.icons] });
    const materialsInfo = await axios.get(`http://localhost:5002/materials/${productNum}`);
    data.overviewInfo = overviewInfo.dataValues;
    data.materialsInfo = materialsInfo.data;
    res.send(data);
  } catch (err) {
    res.send(404);
  }
});

app.listen(5007, () => {
  console.log('listening on port 5007!');
});

module.exports = app;
