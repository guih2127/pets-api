import { Species } from "../../entities/species";
import { SpeciesRepository } from "../interfaces/species-repository";

export class InMemorySpeciesRepository implements SpeciesRepository {
  public species: Species[] = [];

  async getAll(): Promise<Species[]> {
    return this.species;
  }

  async getById(id: number): Promise<Species | null> {
    const species = this.species.find((species) => species.id === id);

    if (!species) return null;

    return species;
  }

  async create(specie: Species): Promise<number> {
    specie.id = this.species.length + 1;
    this.species.push(specie);

    return specie.id;
  }
}
