import app from './lib/app.js';
import pool from './lib/utils/pool.js';

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.info(`🐘 Server up at ${API_URL}:${PORT}`);
});

process.on('exit', () => {
  console.info('☮️ Goodbye.');
  pool.end();
})
