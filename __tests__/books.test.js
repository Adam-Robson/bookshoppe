const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('bowaoks routes', () => {

  beforeEach(() => {
    return setup(pool);
  });

  test('return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(18);
  });

  test('return book detail', async () => {
    const res = await request(app).get('/books');
    const don = await res.body.find((book) => {
      return expect(book.id = '1');
    });
    expect(don).toHaveProperty('id', '1');
    expect(don).toHaveProperty('title', 'The Ingenious Gentleman Don Quixote of La Mancha');
  });

  afterAll(() => {
    pool.end();
  });
});
