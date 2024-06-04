import { NextFunction, Request, Response } from 'express';

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You do not have access to view this page');

    next();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`There was an error authorizing the request: ${error}`);

    }
    next(error);
  }
};

export default authorize;
