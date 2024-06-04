import { NextFunction, Request, Response } from 'express';

function handleNotFound(
  req: Request,
  res: Response,
  next: NextFunction) {
  
  const err = {
    status: 404,
    message: 'This page has not been found.'
  };
  
  next(err);
}

export default handleNotFound;
