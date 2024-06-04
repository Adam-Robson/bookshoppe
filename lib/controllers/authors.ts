import { Request, Response, Router } from 'express';
import Author from '../models/author.js';

const authorsController = Router()
  .get('/:id', async (req: Request, res: Response) => {
    const reqId = Number(req.params.id);
    const author = await Author.getAuthorById(reqId);
    return res.json(author);
  })
  .get('/', async (req: Request, res: Response) => {
    const authors = await Author.getAllAuthors();
    return res.json(authors);
  });

export default authorsController;
