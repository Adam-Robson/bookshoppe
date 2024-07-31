import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';

import { describe, expect, test, beforeEach, afterAll } from 'jest';

describe('books routes', () => {
  beforeEach(async () => {
    await setup(pool);
  });

  test('return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(18);
  });

  test('return book detail', async () => {
    const response = await request(app).get('/books');
    const don = response.body.find((book) => {
      return expect(book.id = '1');
    });
    expect(don).toHaveProperty('id', '1');
    expect(don).toHaveProperty('title', 'The Ingenious Gentleman Don Quixote of La Mancha');
  });

  afterAll(async () => {
    await pool.end();
  });
});
