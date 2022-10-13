import { UserModel } from "../models/user-model";
import { IBreedsRepository } from "../repositories/interfaces/breeds-repository";
import { IGenresRepository } from "../repositories/interfaces/genres-repository";
import { IPetsRepository } from "../repositories/interfaces/pets-repository";
import { ISpeciesRepository } from "../repositories/interfaces/species-repository";
import { IUsersRepository } from "../repositories/interfaces/users-repository";
import { ListPetsRequest } from "../requests/list-pets-request";
import { GetPetResponse } from "../responses/get-pet-response";
import { ListPetsResponse } from "../responses/list-pets-response";

export class ListPetsUseCase {
  constructor(
    private petsRepository: IPetsRepository,
    private usersRepository: IUsersRepository,
    private speciesRepository: ISpeciesRepository,
    private breedsRepository: IBreedsRepository,
    private genresRepository: IGenresRepository
  ) {}
  async execute(
    listPetsRequest: ListPetsRequest
  ): Promise<ListPetsResponse | null> {
    // fazer essa validação em um arquivo separado depois
    if (listPetsRequest.breedId === undefined) listPetsRequest.breedId = null;
    if (listPetsRequest.genreId === undefined) listPetsRequest.genreId = null;
    if (listPetsRequest.userId === undefined) listPetsRequest.userId = null;
    if (listPetsRequest.name === undefined) listPetsRequest.name = null;
    if (listPetsRequest.speciesId === undefined)
      listPetsRequest.speciesId = null;
    if (listPetsRequest.pageNumber === undefined)
      listPetsRequest.pageNumber = null;
    if (listPetsRequest.pageSize === undefined) listPetsRequest.pageSize = null;

    const pets = await this.petsRepository.getAll(listPetsRequest);

    if (!pets) return null;

    let petsResponses: GetPetResponse[] = [];

    for (const pet of pets) {
      const user = await this.usersRepository.getById(pet.userId);
      const species = await this.speciesRepository.getById(pet.speciesId);
      const breed = await this.breedsRepository.getById(pet.breedId);
      const genre = await this.genresRepository.getById(pet.genreId);

      if (!user) return null;
      if (!species) return null;
      if (!breed) return null;
      if (!genre) return null;

      const { id, name, email, avatar, zipcode, state, country, phone } = user;
      const userModel = new UserModel({
        id,
        name,
        email,
        avatar,
        zipcode,
        state,
        country,
        phone,
      });

      const getPetResponse = new GetPetResponse({
        id: pet.id,
        name: pet.name,
        description: pet.description,
        picture: pet.picture,
        user: userModel,
        genre: genre,
        species: species,
        breed: breed,
      });

      petsResponses.push(getPetResponse);
    }

    const listPetsResponse = new ListPetsResponse({ pets: petsResponses });
    return listPetsResponse;
  }
}
