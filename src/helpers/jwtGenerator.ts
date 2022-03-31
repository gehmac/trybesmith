import jwt from 'jsonwebtoken';
import { User } from '../interfaces';

const jwtConfig = {
  expiresIn: '1d',
};

const JWT_SECRET = process.env.JWT_SECRET || 'supersecreta';

export default (payload : User) => jwt.sign({ payload }, JWT_SECRET, jwtConfig);