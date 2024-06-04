import pool from '../utils/pool.js';
import { TBook } from '../utils/types.js';

class Book {
  id;
  title;
  released;
  author;

  constructor(row: TBook) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.author ? this.author = [] : row.author
  }

  static async getAllBooks() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((row: TBook) => new Book(row));
  }

  static async getBookById(id: number) {
    const { rows } = await pool.query('SELECT * from books WHERE id = $1;', [
      id
    ]);
    
    if (!rows) return null;

    return new Book(rows[0]);
  }
}

export default Book;
