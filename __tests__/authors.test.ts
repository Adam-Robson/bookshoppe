import pool from '../lib/utils/pool.js';
import initializeSetup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import { TAuthor } from '../lib/utils/types.js';

describe('authors routes', () => {

  beforeEach(() => {
    return initializeSetup(pool);
  });

  test('return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(13);
  });

  test('return an author and detail', async () => {
    const res = await request(app).get('/authors');
    const writer = await res.body.find((author: TAuthor) => author.id === 3);
    expect(writer).toHaveProperty('id', 3);
    expect(writer).toHaveProperty('name', 'Ralph Ellison');
    expect(writer).toMatchObject({ id: writer.id, name: writer.name });
  });

  afterAll(() => {
    pool.end();
  });
});
