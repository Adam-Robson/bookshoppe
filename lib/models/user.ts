import pool from '../utils/pool.js';
import { TUser } from '../utils/types.js';

class User {
  id;
  firstName;
  lastName;
  email;
  #passwordHash;

  constructor(row: TUser) {
    this.id = row.id;
    this.firstName = row.firstName;
    this.lastName = row.lastName;
    this.email = row.email;
    this.#passwordHash = row.password_hash;
  }

  static async insertUser({ firstName, lastName, email, passwordHash }: TUser
  ) {
    const { rows } = await pool.query(
      `
      INSERT INTO users (first_name, last_name, email, password_hash)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `,
      [firstName, lastName, email, passwordHash]
    );

    return new User(rows[0]);
  }

  static async getAllUsers() {
    const { rows } = await pool.query('SELECT * FROM users');

    return rows.map((row) => new User(row));
  }

  static async getUserByEmail(email: string) {
    const { rows } = await pool.query(
      `
      SELECT *
      FROM users
      WHERE email=$1
      `,
      [email]
    );

    if (!rows[0]) return null;

    return new User(rows[0]);
  }

  get passwordHash() {
    return this.#passwordHash;
  }
}

export default User;
