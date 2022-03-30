import express, { Express } from 'express';
import ProductController from './controllers/products.constroller';
import middlewares from './middlewares';

const productController = new ProductController();

const app: Express = express();
app.use(express.json());

app
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'ok' }));

app
  .route('/products')
  .get(productController.getAll)
  .post(productController.create);

app.use(middlewares.handleError);

export default app;
