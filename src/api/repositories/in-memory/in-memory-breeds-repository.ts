import { Breed } from "../../entities/breed";
import { IBreedsRepository } from "../interfaces/breeds-repository";

export class InMemoryBreedsRepository implements IBreedsRepository {
  public breeds: Breed[] = [];

  async getAll(): Promise<Breed[]> {
    return this.breeds;
  }

  async getById(id: number): Promise<Breed | null> {
    const breeds = this.breeds.find((breed) => breed.id === id);

    if (!breeds) return null;

    return breeds;
  }

  async getAllBySpeciesId(speciesId: number): Promise<Breed[]> {
    const breeds = this.breeds.filter((breed) => breed.speciesId === speciesId);

    return breeds;
  }

  async create(breed: Breed): Promise<number> {
    breed.id = this.breeds.length + 1;
    this.breeds.push(breed);

    return breed.id;
  }
}
