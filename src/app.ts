import express from 'express';
import ProductController from './controllers/products.constroller';

const productController = new ProductController();

const app = express();
app.use(express.json());

app
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'ok' }));

app
  .route('/products')
  .get(productController.getAll);

export default app;
