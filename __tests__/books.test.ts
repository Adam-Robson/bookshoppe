import pool from '../lib/utils/pool.js';
import initializeSetup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import { TBook } from '../lib/utils/types.js';
describe('books routes', () => {

  beforeEach(() => {
    return initializeSetup(pool);
  });

  test('return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(18);
  });

  test('return book detail', async () => {
    const res = await request(app).get('/books');
    const don = await res.body.find((book: TBook) => {
      return expect(book.id = 1);
    });
    expect(don).toHaveProperty('id', 1);
    expect(don).toHaveProperty('title', 'The Ingenious Gentleman Don Quixote of La Mancha');
  });

  afterAll(() => {
    pool.end();
  });
});
