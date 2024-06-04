import { promises as fs } from 'fs';
import { Pool } from 'pg';

const initializeSetup = async (pool: Pool) => {
  try {
    const sql = await fs.readFile(`./sql/setup.sql`, {
      encoding: 'utf-8'
    });
    await pool.query(sql);
    if (process.env.NODE_ENV !== 'test') {
      console.info('🐘 Database setup complete!');
    }
  } catch (error) {
    if (error instanceof Error) {
      const dbNotFound = error.message.match(/database "(.+)" does not exist/i);
      if (dbNotFound) {
        const [err, db] = dbNotFound;
        console.error(`Error in setup: ${err}`);
        console.info(
          `Try running \`createdb -U postgres ${db}\` in your terminal`
        );
      } else {
        console.error(`There was an error during setup ${error}.`);
        console.error(`The error message is: ${error.message}`);
      }
    }
  }
}

export default initializeSetup;
