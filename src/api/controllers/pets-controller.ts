import { Request, Response } from "express";
import PetsFactory from "../factories/pets-factory";
import { CreatePetRequest } from "../requests/create-pet-request";
import { CreatePetUseCase } from "../use-cases/create-pet-use-case";

export default class PetsController {
  private createPetUseCase: CreatePetUseCase;

  constructor() {
    const petsFactory = PetsFactory();

    this.createPetUseCase = petsFactory.createPetUseCase;
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
    return response.status(201).send(result);
  }
}
