import { Pet } from "../../entities/pet";

export interface PetsRepository {
  create(pet: Pet): Promise<number>;
  getById(id: number): Promise<Pet | null>;
}
