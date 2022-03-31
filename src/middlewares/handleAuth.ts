import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'secret_another';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return null;

  try {
    const decode = jwt.verify(token, SECRET) as JwtPayload;

    req.body.token = decode.data;

    return next();
  } catch (err: unknown) {
    if (err instanceof Error && err.name.includes('Token')) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    return next(err);
  }
};