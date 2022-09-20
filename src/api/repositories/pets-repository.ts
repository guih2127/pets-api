import { Pet } from "../entities/pet";
import { IPetsRepository } from "./interfaces/pets-repository";

export class PetsRepository implements IPetsRepository {
  create(pet: Pet): Promise<number> {
    throw new Error("Method not implemented.");
  }
  getById(id: number): Promise<Pet> {
    throw new Error("Method not implemented.");
  }
}
