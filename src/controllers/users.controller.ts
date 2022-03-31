import { Request, Response } from 'express';
import UserService from '../services/users.services';
import validateUsers from '../schemas/validateUsers';
// import middlewares from './middlewares';
// import validateProducts from '../schemas/validateProducts';

export default class ProductController {
  constructor(private productService = new UserService()) {}

  public getAll = async (req: Request, res: Response) => {
    const users = await this.productService.getAll();
    return res.status(200).json(users);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const { error } = validateUsers.validate(product);
    if (error) {
      const [code, data] = error.message.split('|');

      return res.status(Number(code)).json({ error: data });
    }

    const token = await this.productService.create(product);
    return res.status(201).json({ token });
  };
}