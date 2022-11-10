const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(18);
  });
});

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('return a list of authors', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(13);
  });

  test('return an author and detail', async () => {
    const res = await request(app).get('/authors');
    const writer = res.body.find((author) => author.id === '3');
    expect(writer).toHaveProperty('id', '3');
    expect(writer).toHaveProperty('name', 'Ralph Ellison');
    expect(writer).toMatchObject({ id: writer.id, name: writer.name });
  });

  afterAll(() => {
    pool.end();
  });
});
