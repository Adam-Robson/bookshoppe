import app from './lib/app.js';
import pool from './lib/utils/pool.js';

const API_URL = process.env.API_URL || 'http://localhost';
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🔭 Server started on 🔭 ${API_URL}:${PORT}`);
});

process.on('exit', () => {
  console.log('👋  Goodbye!');
  pool.end();
});
