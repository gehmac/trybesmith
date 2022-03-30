import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import validateProducts from '../schemas/validateProducts';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const { error } = validateProducts.validate(product);
    if (error) {
      const [code, data] = error.message.split('|');

      return res.status(Number(code)).json({ error: data });
    }

    const productCreate = await this.productService.create(product);
    return res.status(201).json({ item: productCreate });
  };
}