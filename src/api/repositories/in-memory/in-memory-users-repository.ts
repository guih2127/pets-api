import { User } from "../../entities/user";
import { IUsersRepository } from "../interfaces/users-repository";

export class InMemoryUsersRepository implements IUsersRepository {
  public users: User[] = [];

  async getById(id: number): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    if (!user) return null;

    return user;
  }

  async create(user: User): Promise<number> {
    user.id = this.users.length + 1;
    this.users.push(user);

    return user.id;
  }
}
