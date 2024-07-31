import pool from '../utils/pool.js';

class Book {

  constructor({ id, title, released, author }) {
    this.id = id;
    this.title = title;
    this.released = released;
    this.author = author;
  }

  static async getAllBooks() {
    const { rows } = await pool.query(`
      SELECT * FROM books;
      `);
    return rows.map((row) => new Book(row));
  }

  static async getBookById(id) {
    const { rows } = await pool.query(`
     SELECT books.*,
            COALESCE(
              json_agg(to_jsonb(authors))
            ) AS authors
      FROM books
      LEFT JOIN authors_books
      ON books.id = authors_books.book_id
      LEFT JOIN authors
      ON authors.id = authors_books.author_id
      WHERE books.id = $1
      GROUP BY books.id;
      `, [id]);
    return new Book(rows[0]);
  }
}

export default Book;
