import path from 'path';
import express from 'express';
import booksController from './controllers/books.js';
import authorsController from './controllers/authors.js';
import userController from './controllers/users.js';
import handleNotFound from './middleware/not-found.js';
import handleErrors from './middleware/error.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userController)
app.use('/books', booksController);
app.use('/authors', authorsController);

// Error handling
app.use(handleNotFound);
app.use(handleErrors);

export default app;
