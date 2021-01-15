const express = require('express');

const db = require('../database/connection.js')
db.icons = require('../database/models/icons.model.js');
db.overview = require('../database/models/overview.model.js');

const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/overview/icons/', (req, res) => {
  const productNum = req.query.product_id
  return db.overview.retrieveOneProduct(productNum)
    .then((overviewInfo) => {
      res.send(overviewInfo)
    })
    .catch((err) => console.log('ERROR IN SERVER: ', err))
})

app.listen(6001, function () {
  console.log('listening on port 6001!');
})