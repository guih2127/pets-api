import { User } from "../../entities/user";

export interface IUsersRepository {
  getById(id: number): Promise<User | null>;
  create(user: User): Promise<number>;
}
