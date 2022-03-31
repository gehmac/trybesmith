import jwtGenerator from '../helpers/jwtGenerator';
import { User } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/users.model';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const products = await this.model.getAll();
    return products;
  }

  create = async (newUser: User) => {
    const createUser = await this.model.create(newUser);
    const token = jwtGenerator(createUser);

    return token;
  };
}