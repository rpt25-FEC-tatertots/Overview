const request = require('supertest');
const app = require('./server');

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

test('Gets the correct product from database', async(done) => {
  const targetProductId = 12;
  const res = await request(app).get(`/overview/icons?product_id=${targetProductId}`);
  expect(res.body.product_id).toBe(targetProductId);
  done();
});
