import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { TUser } from '../utils/types.js';

const jwtSecret = process.env.JWT_SECRET || '';

class UserService {
  static async createUser({ firstName, lastName, email, password }: TUser
  ) {
    const passwordHash = await bcrypt.hash(
      password || '',
      Number(process.env.SALT_ROUNDS)
    );

    const user = await User.insertUser({
      firstName,
      lastName,
      email,
      passwordHash
    } as TUser);
    
    return user;
  }

  static async signInUser({ email, password = '' }:
    { email: string, password: string }) {
    try {
      const user = await User.getUserByEmail(email);

      if (!user) throw new Error('Email address is invalid.');

      if (!user.passwordHash || !bcrypt.compareSync(
          password,
          user.passwordHash
        )) {
        throw new Error('Password is invalid.');
      }

      const token = jwt.sign({ ...user }, jwtSecret, {
        expiresIn: '1 day'
      });
      
      return token;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`There was an error in the user service: ${error}`);
      }
    }
  }
}

export default UserService;
