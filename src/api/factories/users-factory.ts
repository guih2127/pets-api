import { UsersRepository } from "../repositories/users-repository";
import { CreateUserUseCase } from "../use-cases/create-user-use-case";

export default function UsersFactory() {
  const usersRepository = new UsersRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);

  return { createUserUseCase };
}
