import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../../api/repositories/in-memory/in-memory-users-repository";
import { CreateUserResponse } from "../../api/responses/create-user-response";
import { CreateUserUseCase } from "../../api/use-cases/create-user-use-case";

describe("Create Pet", () => {
  const usersRepository = new InMemoryUsersRepository();
  const createUser = new CreateUserUseCase(usersRepository);

  it("should be able to create an user", async () => {
    const createUserResponse = await createUser.execute({
      name: "Usuario",
      email: "email@gmail.com",
      password: "11111",
      confirmPassword: "11111",
      avatar: "imagem1",
      zipcode: "11111-111",
      state: "MG",
      country: "Brasil",
      phone: "11-11111-1111",
    });

    expect(createUserResponse).toBeInstanceOf(CreateUserResponse);
  });

  it("shouldn't be able to create an user with different password and confirmPassword", async () => {
    const createUserResponse = await createUser.execute({
      name: "Usuario",
      email: "email@gmail.com",
      password: "11111",
      confirmPassword: "22222",
      avatar: "imagem1",
      zipcode: "11111-111",
      state: "MG",
      country: "Brasil",
      phone: "11-11111-1111",
    });

    expect(createUserResponse).toBeNull();
  });
});
