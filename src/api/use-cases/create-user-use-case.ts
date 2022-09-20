import { User } from "../entities/user";
import { IUsersRepository } from "../repositories/interfaces/users-repository";
import { CreateUserRequest } from "../requests/create-user-request";
import { CreateUserResponse } from "../responses/create-user-response";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({
    name,
    email,
    password,
    confirmPassword,
    avatar,
    zipcode,
    state,
    country,
    phone,
  }: CreateUserRequest): Promise<CreateUserResponse | null> {
    if (password !== confirmPassword) return null;

    const user = new User({
      name,
      email,
      password,
      avatar,
      zipcode,
      state,
      country,
      phone,
    });

    const id = await this.usersRepository.create(user);

    const createUserResponse = new CreateUserResponse({
      id,
      name,
      email,
      avatar,
      zipcode,
      state,
      country,
      phone,
    });

    return createUserResponse;
  }
}
