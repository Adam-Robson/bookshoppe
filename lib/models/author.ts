import pool from '../utils/pool.js';
import { TAuthor } from '../utils/types.js';

class Author {
  id;
  name;
  dob;
  pob;
  books;

  constructor(row: TAuthor) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
    this.books ? this.books = [] : row.books;
  }

  static async getAllAuthors() {
    const { rows } = await pool.query('SELECT * FROM authors');
      return rows.map((row: TAuthor) => new Author(row));
    }
  

  static async getAuthorById(id: number) {
    const { rows } = await pool.query(
      `
      SELECT authors *,
          COALESCE(
            json_agg(to_jsonb(books))
          ) AS books
          FROM authors
          LEFT JOIN authors_books
          ON authors.id  = authors_books.author_id
          LEFT JOIN books
          ON books.id = authors_books.book_id
          WHERE authors.id = $1
          GROUP BY authors.id
          `, [id]);
    return new Author(rows[0])
  }
}

export default Author;
