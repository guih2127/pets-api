import { Species } from "../../entities/species";
import { SpeciesRepository } from "../interfaces/species-repository";

export class InMemorySpeciesRepository implements SpeciesRepository {
  public species: Species[];

  async getAll(): Promise<Species[] | null> {
    return this.species;
  }
}
