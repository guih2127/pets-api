import { User } from "../entities/user";
import AppDataSource from "../orm/type-orm/data-source";

export class UsersRepository implements UsersRepository {
  dataSource = AppDataSource.getRepository(User);

  getById(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
  create(user: User): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
