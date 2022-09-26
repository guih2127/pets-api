import { Pet } from "../../entities/pet";
import { ListPetsRequest } from "../../requests/list-pets-request";
import { IPetsRepository } from "../interfaces/pets-repository";

export class InMemoryPetsRepository implements IPetsRepository {
  public pets: Pet[] = [];

  async getAll(listPetsRequest: ListPetsRequest): Promise<Pet[]> {
    const { pageNumber, pageSize, name, speciesId, genreId, breedId, userId } =
      listPetsRequest;

    let petsFiltered = [...this.pets];

    if (name)
      petsFiltered = petsFiltered.filter((pet) => {
        pet.name.includes(name);
      });

    if (speciesId)
      petsFiltered = petsFiltered.filter(
        (pet) => pet.speciesId === parseInt(speciesId)
      );

    if (genreId)
      petsFiltered = petsFiltered.filter(
        (pet) => pet.genreId === parseInt(genreId)
      );

    if (breedId)
      petsFiltered = petsFiltered.filter(
        (pet) => pet.breedId === parseInt(breedId)
      );

    if (userId)
      petsFiltered = petsFiltered.filter(
        (pet) => pet.userId === parseInt(userId)
      );

    petsFiltered = petsFiltered.slice(
      (parseInt(pageNumber) - 1) * parseInt(pageSize),
      parseInt(pageNumber) * parseInt(pageSize)
    );

    return petsFiltered;
  }

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
