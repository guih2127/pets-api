import { Breed } from "../../entities/breed";

export interface IBreedsRepository {
  getAll(): Promise<Breed[]>;
  getAllBySpeciesId(speciesId: number): Promise<Breed[]>;
  getById(id: number): Promise<Breed | null>;
  create(breed: Breed): Promise<number>;
}
