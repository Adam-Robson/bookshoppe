import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function setup(pool) {
  try {
    const sql = await fs.readFile(`${__dirname}/../sql/setup.sql`, { encoding: 'utf-8' });
    const res = await pool.query(sql);
    if (process.env.NODE_ENV !== 'test') {
      console.log('✅ Database setup complete!');
    }

    return res;
  } catch (error) {
    const dbNotFound = error.message.match(/database "(.+)" does not exist/i);

    if (dbNotFound) {
      const [, db] = dbNotFound;
      console.error('❌ Error: ' + error.message);
      console.info(
        `Try running \`createdb -U postgres ${db}\` in your terminal`
      );
    } else {
      console.error(error);
      console.error('❌ Error: ' + error.message);
    }
  }
}

