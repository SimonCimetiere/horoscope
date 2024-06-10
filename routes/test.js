const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

describe('horoscope endpoint', () => {
  it('GET / should fail', async () => {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toEqual(500);
  });
  it('GET / with birthday should get an astrological sign', async () => {
    const res = await requestWithSupertest.get('/?day=5&month=7');
    expect(res.status).toEqual(200);
    expect(res.res.text).toContain("Cancer");
  });
});