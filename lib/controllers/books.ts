import { Request, Response, Router } from 'express';
import Book from '../models/book.js';

const booksRouter = Router()
  .get('/:id', async (req: Request, res: Response) => {
    // convert the id value on the request params to a number
    const reqId = Number(req.params.id);
    const book = await Book.getBookById(reqId);
    res.json(book);
  })
  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
  });

export default booksRouter;
