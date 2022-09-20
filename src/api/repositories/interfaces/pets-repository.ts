import { Pet } from "../../entities/pet";

export interface IPetsRepository {
  create(pet: Pet): Promise<number>;
  getById(id: number): Promise<Pet | null>;
}
