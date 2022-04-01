import { Request, Response } from 'express';
import UserService from '../services/orders.service';

export default class ProductController {
  constructor(private productService = new UserService()) {}

  public getAll = async (req: Request, res: Response) => {
    const users = await this.productService.getAll();
    return res.status(200).json(users);
  };
}