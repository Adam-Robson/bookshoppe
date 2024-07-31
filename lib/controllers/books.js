import { Router } from 'express';

import Book from '../models/Book.js';

const booksRouter = Router()
  .get('/:id', async (req, res) => {
    const book = await Book.getBookById(req.params.id);
    res.json(book);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
  });

export default booksRouter;
