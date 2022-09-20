import { Species } from "../../entities/species";

export interface SpeciesRepository {
  getAll(): Promise<Species[] | null>;
}
