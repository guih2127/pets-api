import mySqlConnection from "../database/mysql-connection";
import { BreedsRepository } from "../repositories/breeds-repository";
import { GenresRepository } from "../repositories/genres-repository";
import { PetsRepository } from "../repositories/pets-repository";
import { SpeciesRepository } from "../repositories/species-repository";
import { UsersRepository } from "../repositories/users-repository";
import { CreatePetUseCase } from "../use-cases/create-pet-use-case";
import { GetPetUseCase } from "../use-cases/get-pet-use-case";

export default function PetsFactory() {
  const petsRepository = new PetsRepository();
  const usersRepository = new UsersRepository();
  const speciesRepository = new SpeciesRepository();
  const breedsRepository = new BreedsRepository();
  const genresRepository = new GenresRepository();

  const createPetUseCase = new CreatePetUseCase(
    petsRepository,
    usersRepository,
    speciesRepository,
    breedsRepository,
    genresRepository
  );

  const getPetUseCase = new GetPetUseCase(
    petsRepository,
    usersRepository,
    speciesRepository,
    breedsRepository,
    genresRepository
  );

  return { createPetUseCase, getPetUseCase };
}
