import { Breed } from "../../entities/breed";

export interface BreedsRepository {
  getAllBySpeciesId(speciesId: number): Promise<Breed[]>;
  getById(id: number): Promise<Breed | null>;
}
