import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';
dotenv.config();

import booksController from './controllers/books.js';
import authorsController from './controllers/authors.js';

import errorHandler from './middleware/error.js';
import notFoundHandler from './middleware/not-found.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', booksController);
app.use('/authors', authorsController);

app.use(errorHandler);
app.use(notFoundHandler);

export default app;
