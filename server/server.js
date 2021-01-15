const express = require('express');


const app = express();

app.use(express.static('./public/dist'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/overview/icons/', (req, res) => {

})

app.listen(6001, function () {
  console.log('listening on port 6001!');
})