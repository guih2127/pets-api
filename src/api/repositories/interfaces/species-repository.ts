import { Species } from "../../entities/species";

export interface SpeciesRepository {
  getAll(): Promise<Species[] | null>;
  getById(id: number): Promise<Species | null>;
}
