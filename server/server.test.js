const request = require('supertest');
const app = require('./server');

test('get product information', async () => {
  await request(app)
    .get('/overview/icons/')
    .expect(200)
    .then((response) => {
      console.log('RESPONSE: ', response);
      expect(typeof response).toBe('object');
    });
});
