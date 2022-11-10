const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /books returns a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(18);
    expect(res.body[0]).toBe({
      id: expect.any(Number),
      title: expect.any(String),
      released: expect.any(String)
    });
  });

  afterAll(() => {
    pool.end();
  });
});
