import { describe, expect, it } from "vitest";
import { Pet } from "../../api/entities/pet";
import { InMemoryPetsRepository } from "../../api/repositories/in-memory/in-memory-pets-repository";
import { InMemoryUsersRepository } from "../../api/repositories/in-memory/in-memory-users-repository";
import { InMemoryGenresRepository } from "../../api/repositories/in-memory/in-memory-genres-repository";
import { InMemorySpeciesRepository } from "../../api/repositories/in-memory/in-memory-species-repository";
import { InMemoryBreedsRepository } from "../../api/repositories/in-memory/in-memory-breeds-repository";
import { CreatePetUseCase } from "../../api/use-cases/create-pet-use-case";
import { CreatePetResponse } from "../../api/responses/create-cat-response";
import { User } from "../../api/entities/user";
import { Breed } from "../../api/entities/breed";
import { Species } from "../../api/entities/species";
import { Genre } from "../../api/entities/genre";

describe("Create Pet", () => {
  const petsRepository = new InMemoryPetsRepository();
  const usersRepository = new InMemoryUsersRepository();
  const genresRepository = new InMemoryGenresRepository();
  const speciesRepository = new InMemorySpeciesRepository();
  const breedsRepository = new InMemoryBreedsRepository();

  const createPet = new CreatePetUseCase(
    petsRepository,
    usersRepository,
    speciesRepository,
    breedsRepository,
    genresRepository
  );

  const user = new User({
    id: 1,
    name: "Usuario",
    email: "email@gmail.com",
    password: "11111",
    avatar: "imagem1",
    zipcode: "11111-111",
    state: "MG",
    country: "Brasil",
    phone: "11-11111-1111",
  });
  const genre = new Genre({ id: 1, name: "Male" });
  const species = new Species({ id: 1, name: "Dog" });
  const breed = new Breed({ id: 1, name: "SRD", speciesId: 1 });

  usersRepository.create(user);
  genresRepository.create(genre);
  speciesRepository.create(species);
  breedsRepository.create(breed);

  it("should be able to create a pet", async () => {
    const createPetResponse = await createPet.execute({
      name: "Batata",
      description: "Um cachorro",
      breedId: 1,
      genreId: 1,
      speciesId: 1,
      authorId: 1,
      picture: "picure1",
    });

    expect(createPetResponse).toBeInstanceOf(CreatePetResponse);
  });

  it("shouldn't be able to create a pet with an inexisting authorId", async () => {
    const createPetResponse = await createPet.execute({
      name: "Batata",
      description: "Um cachorro",
      breedId: 1,
      genreId: 1,
      speciesId: 1,
      authorId: 2,
      picture: "picure1",
    });

    expect(createPetResponse).toBeNull();
  });
});
