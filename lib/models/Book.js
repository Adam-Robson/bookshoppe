const pool = require('../utils/pool');

module.exports = class Book {
  constructor({ id, title, released }) {
    this.id = id;
    this.title = title;
    this.released = released;
  }
  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * FROM books'
    );
    return rows.map(row => new Book({
      id: row.id,
      title: row.title,
      released: row.released,
    })
    );
  }
};
