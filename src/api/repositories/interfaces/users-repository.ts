import { User } from "../../entities/user";

export interface UsersRepository {
  getById(id: number): Promise<User | null>;
  create(user: User): Promise<number>;
}
