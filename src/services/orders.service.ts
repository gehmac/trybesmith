import connection from '../models/connection';
import OrdesModel from '../models/ordes.model';
import { Order } from '../interfaces';

export default class UserService {
  public model: OrdesModel;

  constructor() {
    this.model = new OrdesModel(connection);
  }

  getAll = async (): Promise<Order[]> => {
    const order = await this.model.getAll();
    const mapOrder = order.map(({ id, userId, product }) => ({
      id,
      userId,
      products: [product],
    }));
    console.log(mapOrder);

    return mapOrder;
  };
}