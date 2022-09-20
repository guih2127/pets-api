import { Breed } from "../../entities/breed";
import { BreedsRepository } from "../interfaces/breeds-repository";

export class InMemoryBreedsRepository implements BreedsRepository {
  public breeds: Breed[];

  async getById(id: number): Promise<Breed | null> {
    const breeds = this.breeds.find((breed) => breed.id === id);

    if (!breeds) return null;

    return breeds;
  }

  async getAllBySpeciesId(speciesId: number): Promise<Breed[]> {
    const breeds = this.breeds.filter((breed) => breed.speciesId === speciesId);

    return breeds;
  }
}
