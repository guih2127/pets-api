import { Breed } from "../../entities/breed";
import { BreedsRepository } from "../interfaces/breeds-repository";

export class InMemoryBreedsRepository implements BreedsRepository {
  public breeds: Breed[];

  async getAllBySpeciesId(speciesId: number): Promise<Breed[]> {
    const breeds = this.breeds.filter(
      (breed) => breed.species.id === speciesId
    );

    return breeds;
  }
}
