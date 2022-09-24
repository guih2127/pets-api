import { Request, Response } from "express";
import PetsFactory from "../factories/pets-factory";
import { CreatePetRequest } from "../requests/create-pet-request";
import { CreatePetUseCase } from "../use-cases/create-pet-use-case";
import { GetPetUseCase } from "../use-cases/get-pet-use-case";

export default class PetsController {
  private createPetUseCase: CreatePetUseCase;
  private getPetUseCase: GetPetUseCase;

  constructor() {
    const petsFactory = PetsFactory();

    this.createPetUseCase = petsFactory.createPetUseCase;
    this.getPetUseCase = petsFactory.getPetUseCase;
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
