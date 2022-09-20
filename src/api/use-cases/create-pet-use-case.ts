import { Pet } from "../entities/pet";
import { IPetsRepository } from "../repositories/interfaces/pets-repository";
import { IUsersRepository } from "../repositories/interfaces/users-repository";
import { ISpeciesRepository } from "../repositories/interfaces/species-repository";
import { IBreedsRepository } from "../repositories/interfaces/breeds-repository";
import { IGenresRepository } from "../repositories/interfaces/genres-repository";
import { CreatePetRequest } from "../requests/create-cat-request";
import { CreatePetResponse } from "../responses/create-cat-response";

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
    authorId,
    genreId,
    speciesId,
    breedId,
  }: CreatePetRequest): Promise<CreatePetResponse | null> {
    const pet = new Pet({
      name,
      description,
      picture,
      authorId,
      genreId,
      speciesId,
      breedId,
    });

    const id = await this.petsRepository.create(pet);
    const createdPet = await this.petsRepository.getById(id);

    if (!createdPet) return null;

    const author = await this.usersRepository.getById(createdPet.authorId);
    const species = await this.speciesRepository.getById(createdPet.speciesId);
    const breed = await this.breedsRepository.getById(createdPet.breedId);
    const genre = await this.genresRepository.getById(createdPet.genreId);

    if (!author) return null;
    if (!species) return null;
    if (!breed) return null;
    if (!genre) return null;

    const createPetResponse = new CreatePetResponse({
      id,
      name,
      description,
      picture,
      author,
      genre,
      species,
      breed,
    });

    return createPetResponse;
  }
}
