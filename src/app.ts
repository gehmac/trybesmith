import express, { Express } from 'express';
import ProductController from './controllers/products.constroller';
import UsersController from './controllers/users.controller';

import middlewares from './middlewares';

const productController = new ProductController();
const usersController = new UsersController();

const app: Express = express();
app.use(express.json());

app
  .route('/')
  .get((req, res) => res.status(200).json({ message: 'ok' }));

app
  .route('/products')
  .get(productController.getAll)
  .post(productController.create);

app
  .route('/users')
  .get(usersController.getAll)
  .post(usersController.create);
// middlewares.handleAuth

app.use(middlewares.handleError);

export default app;
