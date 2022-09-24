import { Request, Response } from "express";
import PetsFactory from "../factories/pets-factory";
import { CreatePetRequest } from "../requests/create-pet-request";
import { ListPetsRequest } from "../requests/list-pets-request";
import { CreatePetUseCase } from "../use-cases/create-pet-use-case";
import { GetPetUseCase } from "../use-cases/get-pet-use-case";
import { ListPetsUseCase } from "../use-cases/list-pets-use-case";

export default class PetsController {
  private createPetUseCase: CreatePetUseCase;
  private getPetUseCase: GetPetUseCase;
  private listPetsUseCase: ListPetsUseCase;

  constructor() {
    const petsFactory = PetsFactory();

    this.createPetUseCase = petsFactory.createPetUseCase;
    this.getPetUseCase = petsFactory.getPetUseCase;
    this.listPetsUseCase = petsFactory.listPetsUseCase;
  }

  async getAll(request: Request, response: Response) {
    const { name, speciesId, genreId, userId, breedId, pageSize, pageNumber } =
      request.query;

    const listPetsRequest = {
      name,
      speciesId,
      genreId,
      userId,
      breedId,
      pageSize,
      pageNumber,
    } as ListPetsRequest;

    const result = await this.listPetsUseCase.execute(listPetsRequest);

    if (result === null) return response.status(400).send(result);
    return response.status(200).send(result);
  }

  async create(request: Request, response: Response) {
    const { name, description, picture, userId, breedId, genreId, speciesId } =
      request.body;

    const createPetRequest = {
      name,
      description,
      picture,
      userId,
      breedId,
      genreId,
      speciesId,
    } as CreatePetRequest;

    const result = await this.createPetUseCase.execute(createPetRequest);

    if (result === null) return response.status(400).send(result);
    return response.status(201).send(result);
  }

  async getById(request: Request, response: Response) {
    const id = parseInt(request.params.id);

    const result = await this.getPetUseCase.execute(id);

    if (result === null) return response.status(404).send(result);
    return response.status(200).send(result);
  }
}
