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
import { GetPetResponse } from "../../api/responses/get-pet-response";
import { GetPetUseCase } from "../../api/use-cases/get-pet-use-case";

describe("Get pet", () => {
  const petsRepository = new InMemoryPetsRepository();
  const usersRepository = new InMemoryUsersRepository();
  const genresRepository = new InMemoryGenresRepository();
  const speciesRepository = new InMemorySpeciesRepository();
  const breedsRepository = new InMemoryBreedsRepository();

  const getPetUseCase = new GetPetUseCase(
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
  const genre = new Genre({ id: 1, name: "Macho" });
  const species = new Species({ id: 1, name: "Cachorro" });
  const breed = new Breed({ id: 1, name: "SRD" });
  const pet = new Pet({
    name: "Batata",
    description: "Um cachorro",
    breedId: 1,
    genreId: 1,
    speciesId: 1,
    userId: 1,
    picture: null,
  });

  usersRepository.create(user);
  genresRepository.create(genre);
  speciesRepository.create(species);
  breedsRepository.create(breed);
  petsRepository.create(pet);

  it("should be able to get a pet", async () => {
    const id = 1;
    const getPetResponse = await getPetUseCase.execute(id);
    expect(getPetResponse).toBeInstanceOf(GetPetResponse);
    expect(getPetResponse.id).toBe(1);
    expect(getPetResponse.name).toBe("Batata");
    expect(getPetResponse.species.name).toBe("Cachorro");
    expect(getPetResponse.user.name).toBe("Usuario");
    expect(getPetResponse.genre.name).toBe("Macho");
  });

  it("shouldn't be able to get a pet with inexistent id", async () => {
    const id = 3;
    const getPetResponse = await getPetUseCase.execute(id);
    expect(getPetResponse).toBeNull();
  });
});
