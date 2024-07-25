import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false && { rejectUnauthorized: false },
});

pool.on('connect', () => {
  console.log('🐘 Postgres connected');
});

export default pool;
