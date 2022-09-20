import { Pet } from "../entities/pet";
import { PetsRepository } from "../repositories/interfaces/pets-repository";

interface CreatePetRequest {
  name: string;
  description: string;
  breedId: number;
  gemreId: number;
  speciesId: number;
  userId: number;
  pictures: string[];
}

type CreatePetResponse = Pet;

export class CreatePet {
  constructor(private petsRepository: PetsRepository) {}
  async execute(request: CreatePetRequest): Promise<CreatePetResponse> {}
}
