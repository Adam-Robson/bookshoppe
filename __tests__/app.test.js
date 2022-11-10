const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('returns a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(18);
  });
});

afterAll(() => {
  pool.end();
});
