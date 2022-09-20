import { Pet } from "../../entities/pet";
import { PetsRepository } from "../interfaces/pets-repository";

export class InMemoryPetsRepository implements PetsRepository {
  public pets: Pet[] = [];

  async create(pet: Pet): Promise<number> {
    pet.id = this.pets.length + 1;
    this.pets.push(pet);

    return pet.id;
  }

  async getById(id: number): Promise<Pet | null> {
    const pet = this.pets.find((pet) => pet.id === id);
    if (!pet) return null;

    return pet;
  }
}
