import { User } from "../../entities/user";
import { UsersRepository } from "../interfaces/users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public users: User[];

  async getById(id): Promise<User | null> {
    const user = this.users.find((user) => user.id === id);
    if (!user) return null;

    return user;
  }
}
