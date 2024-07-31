import pool from '../utils/pool.js';

class Author {

  constructor({ id, name, dob, pob, books }) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.pob = pob;
    this.books = books;
  }

  static async getAllAuthors() {
    const { rows } = await pool.query(
      'SELECT * from authors'
    );
    return rows.map((row) => new Author({
      id: row.id,
      name: row.name
    })
    );
  }

  static async getAuthorById(id) {
    const { rows } = await pool.query(`
    SELECT authors.*,
            COALESCE(
              json_agg(to_jsonb(books))
            ) AS books
      FROM authors
      LEFT JOIN authors_books
      ON authors.id = authors_books.author_id
      LEFT JOIN books
      ON books.id = authors_books.book_id
      WHERE authors.id = $1
      GROUP BY authors.id;`,
    [id]
    );
    return new Author(rows[0]);
  }
}

export default Author;
