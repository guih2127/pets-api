import { Pet } from "../../entities/pet";
import { PetsRepository } from "../interfaces/pets-repository";

export class InMemoryPetsRepository implements PetsRepository {
  public pets: Pet[] = [];

  async create(pet: Pet): Promise<void> {
    this.pets.push(pet);
  }
}
