import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TUser } from '../utils/types.js';

// use module augmentation to give the Request a user property
declare module 'express-serve-static-core' {
  export interface Request {
    user?: TUser;
  }
}

const cookieName = process.env.COOKIE_NAME || '';
const jwtSecret = process.env.JWT_SECRET || '';

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cookie = req.cookies[cookieName];
    // check session cookie for current user 
    if (!cookie) throw new Error(
      `There is no current user.You must be signed in to continue`
    );

    // verify token stored in cookie, & attach to request
    const user = jwt.verify(cookie, jwtSecret);

    // assign result to req object
    req.user = user as TUser;

    next();
  } catch (error) {
    if (error instanceof Error) {
      console.log(`There was an error while authenticating the user: ${error}`)
    }
    next(error);
  }
};

export default authenticate;
