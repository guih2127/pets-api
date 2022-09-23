import { Request, Response } from "express";
import UsersFactory from "../factories/users-factory";
import { CreateUserRequest } from "../requests/create-user-request";
import { CreateUserUseCase } from "../use-cases/create-user-use-case";

export default class UsersController {
  private createUserUseCase: CreateUserUseCase;

  constructor() {
    const usersFactory = UsersFactory();

    this.createUserUseCase = usersFactory.createUserUseCase;
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      confirmPassword,
      avatar,
      zipcode,
      state,
      country,
      phone,
    } = request.body;

    const createUserRequest = {
      name,
      email,
      password,
      confirmPassword,
      avatar,
      zipcode,
      state,
      country,
      phone,
    } as CreateUserRequest;

    const result = await this.createUserUseCase.execute(createUserRequest);
    return response.status(201).send(result);
  }
}
