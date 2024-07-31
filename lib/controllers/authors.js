import { Router } from 'express';
import Author from '../models/Author.js';

const authorsRouter = Router()
  .get('/:id', async (req, res) => {
    const author = await Author.getAuthorById(req.params.id);
    res.json(author);
  })

  .get('/', async (req, res) => {
    const authors = await Author.getAllAuthors();
    res.json(authors);

  });

export default authorsRouter;
