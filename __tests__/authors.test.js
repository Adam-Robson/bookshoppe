import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';

describe('authors routes', () => {

  beforeEach(async () => {
    await setup(pool);
  });

  test('return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(13);
  });

  test('return an author and its detail', async () => {
    const res = await request(app).get('/authors');
    
    const writer = res.body.find((author) => author.id === '3');

    expect(writer).toHaveProperty('id', '3');
    expect(writer).toHaveProperty('name', 'Ralph Ellison');

    expect(writer).toMatchObject({ id: writer.id, name: writer.name });
  });

  afterAll(async () => {
    await pool.end();
  });
});
