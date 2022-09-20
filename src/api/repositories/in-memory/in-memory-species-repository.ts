import { Species } from "../../entities/species";
import { SpeciesRepository } from "../interfaces/species-repository";

export class InMemorySpeciesRepository implements SpeciesRepository {
  public species: Species[];

  async getById(id: number): Promise<Species | null> {
    const species = this.species.find((species) => species.id === id);

    if (!species) return null;

    return species;
  }

  async getAll(): Promise<Species[] | null> {
    return this.species;
  }
}
