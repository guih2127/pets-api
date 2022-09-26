import { describe, expect, it } from "vitest";
import { Breed } from "../../api/entities/breed";
import { Genre } from "../../api/entities/genre";
import { Pet } from "../../api/entities/pet";
import { Species } from "../../api/entities/species";
import { User } from "../../api/entities/user";
import { InMemoryBreedsRepository } from "../../api/repositories/in-memory/in-memory-breeds-repository";
import { InMemoryGenresRepository } from "../../api/repositories/in-memory/in-memory-genres-repository";
import { InMemoryPetsRepository } from "../../api/repositories/in-memory/in-memory-pets-repository";
import { InMemorySpeciesRepository } from "../../api/repositories/in-memory/in-memory-species-repository";
import { InMemoryUsersRepository } from "../../api/repositories/in-memory/in-memory-users-repository";
import { ListPetsRequest } from "../../api/requests/list-pets-request";
import { ListPetsResponse } from "../../api/responses/list-pets-response";
import { ListPetsUseCase } from "../../api/use-cases/list-pets-use-case";

describe("List pets", () => {
  const petsRepository = new InMemoryPetsRepository();
  const usersRepository = new InMemoryUsersRepository();
  const genresRepository = new InMemoryGenresRepository();
  const speciesRepository = new InMemorySpeciesRepository();
  const breedsRepository = new InMemoryBreedsRepository();

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
  const genreMale = new Genre({ id: 1, name: "Macho" });
  const genreFemale = new Genre({ id: 2, name: "Femea" });
  const species = new Species({ id: 1, name: "Cachorro" });
  const breed = new Breed({ id: 1, name: "SRD" });
  const breedShitzu = new Breed({ id: 2, name: "Shihtzu" });

  const pets = [
    new Pet({
      name: "Cachorro 1",
      description: "Um cachorro",
      breedId: 1,
      genreId: 1,
      speciesId: 1,
      userId: 1,
      picture: "picure1",
    }),
    new Pet({
      name: "Cachorro 2",
      description: "Uma cachorra",
      breedId: 1,
      genreId: 2,
      speciesId: 1,
      userId: 1,
      picture: "picure1",
    }),
    new Pet({
      name: "Cachorro 3",
      description: "Um cachorro",
      breedId: 2,
      genreId: 1,
      speciesId: 1,
      userId: 1,
      picture: "picure1",
    }),
  ];

  usersRepository.create(user);
  genresRepository.create(genreMale);
  genresRepository.create(genreFemale);
  speciesRepository.create(species);
  breedsRepository.create(breed);
  breedsRepository.create(breedShitzu);
  pets.forEach((pet) => {
    petsRepository.create(pet);
  });

  const listPetsUseCase = new ListPetsUseCase(
    petsRepository,
    usersRepository,
    speciesRepository,
    breedsRepository,
    genresRepository
  );

  it("should get all pets with pagination - page 1", async () => {
    const listPetsRequest = {
      name: null,
      speciesId: null,
      genreId: null,
      userId: null,
      breedId: null,
      pageSize: "2",
      pageNumber: "1",
    } as ListPetsRequest;
    const listPetsResponse = await listPetsUseCase.execute(listPetsRequest);

    expect(listPetsResponse).toBeInstanceOf(ListPetsResponse);
    expect(listPetsResponse.pets).toHaveLength(2);
    expect(listPetsResponse.pets[0].id).toBe(1);
    expect(listPetsResponse.pets[1].id).toBe(2);
  });

  it("should get all pets with pagination - page 2", async () => {
    const listPetsRequest = {
      name: null,
      speciesId: null,
      genreId: null,
      userId: null,
      breedId: null,
      pageSize: "2",
      pageNumber: "2",
    } as ListPetsRequest;
    const listPetsResponse = await listPetsUseCase.execute(listPetsRequest);

    expect(listPetsResponse).toBeInstanceOf(ListPetsResponse);
    expect(listPetsResponse.pets).toHaveLength(1);
    expect(listPetsResponse.pets[0].id).toBe(3);
  });

  it("should get all pets with male genre", async () => {
    const listPetsRequest = {
      name: null,
      speciesId: null,
      genreId: "1",
      userId: null,
      breedId: null,
      pageSize: "10",
      pageNumber: "1",
    } as ListPetsRequest;
    const listPetsResponse = await listPetsUseCase.execute(listPetsRequest);

    expect(listPetsResponse).toBeInstanceOf(ListPetsResponse);
    expect(listPetsResponse.pets).toHaveLength(2);
    expect(listPetsResponse.pets[0].id).toBe(1);
    expect(listPetsResponse.pets[1].id).toBe(3);
  });

  it("should get all pets with male genre and shihtzu breed", async () => {
    const listPetsRequest = {
      name: null,
      speciesId: null,
      genreId: "1",
      userId: null,
      breedId: "2",
      pageSize: "10",
      pageNumber: "1",
    } as ListPetsRequest;
    const listPetsResponse = await listPetsUseCase.execute(listPetsRequest);

    expect(listPetsResponse).toBeInstanceOf(ListPetsResponse);
    expect(listPetsResponse.pets).toHaveLength(1);
    expect(listPetsResponse.pets[0].id).toBe(3);
  });
});
