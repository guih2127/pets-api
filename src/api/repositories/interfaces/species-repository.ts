import { Species } from "../../entities/species";

export interface ISpeciesRepository {
  getAll(): Promise<Species[] | null>;
  getById(id: number): Promise<Species | null>;
  create(species: Species): Promise<number>;
}
