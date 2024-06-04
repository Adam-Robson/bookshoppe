import pool from './lib/utils/pool.js';
import setup from './data/setup.js';

setup(pool)
  .catch((error: Error) => {
    if (error instanceof Error) {
      console.error(
        `There was an error setting up the pool: ${error.message} `
      );
    }
  })
  .finally(() => {
    process.exit();
  });
  