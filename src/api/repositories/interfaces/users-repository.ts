import { User } from "../../entities/user";

export interface UsersRepository {
  getById(id): Promise<User | null>;
}
