import { NextFunction, Request, Response, Router } from 'express';
import User from '../models/user.js';
import UserService from '../services/user-service.js';
import authenticate from '../middleware/authenticate.js';
import authorize from '../middleware/authorize.js';

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;
const cookieName: string = process.env.COOKIE_NAME || '';

const userController = Router()
  .post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserService.createUser(req.body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  })

  .post('/sessions', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = await UserService.signInUser(req.body);
      res
        .cookie(cookieName, token, {
          httpOnly: true,
          secure: process.env.SECURE_COOKIES === 'true',
          sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict',
          maxAge: ONE_DAY_IN_MS,
        })
        .json({ message: 'Signed in successfully!' });
    } catch (error) {
      next(error);
    }
  })

  .get('/me', authenticate, async (req: Request, res: Response) => {
    if (req.user) {
        res.json({
            message: 'User details fetched successfully',
            user: {
              id: req.user.id,
              first_name: req.user.firstName,
              last_name: req.user.lastName,
              email: req.user.email
            }
        });
    } else {
        res.status(401).json({ message: 'Unauthorized: No user attached to the request' });
    }
})

  .get('/protected', authenticate, async (req: Request, res: Response) => {
    if (req.user) {
        res.json({ message: 'Access granted', user: req.user });
    } else {
        res.status(401).json({ message: 'Unauthorized: No user attached to the request' });
    }
  })

  .get('/', [authenticate, authorize], async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await User.getAllUsers();
      res.json(users);
    } catch (e) {
      next(e);
    }
  })
  .delete('/sessions', (req: Request, res: Response) => {
    res
      .clearCookie(cookieName, {
        httpOnly: true,
        secure: process.env.SECURE_COOKIES === 'true',
        sameSite: process.env.SECURE_COOKIES === 'true' ? 'none' : 'strict',
        maxAge: ONE_DAY_IN_MS,
      })
      .status(204)
      .send();
  });

export default userController;
