const pool = require('../utils/pool');

module.exports = class Author {
  constructor({ id, name, dob, pob, books }) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.pob = pob;
    books ?
      this.books = books :
      [];
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from authors'
    );
    return rows.map((row) => new Author({
      id: row.id,
      name: row.name
    })
    );
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
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
      GROUP BY authors.id;
      `,
      [id]
    );
    return new Author(rows[0]);
  }
};
