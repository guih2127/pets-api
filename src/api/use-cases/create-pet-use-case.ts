import { Pet } from "../entities/pet";
import { IPetsRepository } from "../repositories/interfaces/pets-repository";
import { IUsersRepository } from "../repositories/interfaces/users-repository";
import { ISpeciesRepository } from "../repositories/interfaces/species-repository";
import { IBreedsRepository } from "../repositories/interfaces/breeds-repository";
import { IGenresRepository } from "../repositories/interfaces/genres-repository";
import { CreatePetRequest } from "../requests/create-pet-request";
import { CreatePetResponse } from "../responses/create-pet-response";

// TO-DO: ver a melhor forma de retornar a createPetResponse
export class CreatePetUseCase {
  constructor(
    private petsRepository: IPetsRepository,
    private usersRepository: IUsersRepository,
    private speciesRepository: ISpeciesRepository,
    private breedsRepository: IBreedsRepository,
    private genresRepository: IGenresRepository
  ) {}
  async execute({
    name,
    description,
    picture,
    userId,
    genreId,
    speciesId,
    breedId,
  }: CreatePetRequest): Promise<CreatePetResponse | null> {
    const pet = new Pet({
      name,
      description,
      picture,
      userId,
      genreId,
      speciesId,
      breedId,
    });

    const id = await this.petsRepository.create(pet);
    const createdPet = await this.petsRepository.getById(id);

    if (!createdPet) return null;

    const user = await this.usersRepository.getById(createdPet.userId);
    const species = await this.speciesRepository.getById(createdPet.speciesId);
    const breed = await this.breedsRepository.getById(createdPet.breedId);
    const genre = await this.genresRepository.getById(createdPet.genreId);

    if (!user) return null;
    if (!species) return null;
    if (!breed) return null;
    if (!genre) return null;

    const createPetResponse = new CreatePetResponse({
      id,
      name,
      description,
      picture,
      user,
      genre,
      species,
      breed,
    });

    return createPetResponse;
  }
}
