const request = require('supertest');
const app = require('./server');

// test('get product information', async () => {
//   await request(app)
//     .get('/overview/icons/')
//     .expect(200)
//     .then((response) => {
//       console.log('RESPONSE: ', response);
//       expect(typeof response).toBe('object');
//     });
// });

test('Successful response from endpoint', async (done) => {
  const res = await request(app).get('/overview/icons?product_id=1');
  expect(res.status).toBe(200);
  done();
});

test('Get correct datatype from endpoint', async (done) => {
  const res = await request(app).get('/overview/icons?product_id=1');
  expect(typeof res.body).toBe('object');
  done();
});
