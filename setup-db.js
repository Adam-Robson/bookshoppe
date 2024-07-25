import pool from './lib/utils/pool.js';
import setup from './data/setup.js';

async function initializeDatabase() {
  try {
    await setup(pool);
  } catch (err) {
    console.error(err);
  }
}

initializeDatabase().then(() => {
  pool.end();
  process.exit();
});
