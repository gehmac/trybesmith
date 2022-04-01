import express, { Express } from 'express';
import ProductController from './controllers/products.constroller';
import UsersController from './controllers/users.controller';
import OrderController from './controllers/order.controller';

import middlewares from './middlewares';

const productController = new ProductController();
const usersController = new UsersController();
const orderController = new OrderController();

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

app
  .route('/orders')
  .get(orderController.getAll);

app.use(middlewares.handleError);

export default app;
