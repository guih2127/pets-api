import { Pet } from "../../entities/pet";
import { ListPetsRequest } from "../../requests/list-pets-request";

export interface IPetsRepository {
  create(pet: Pet): Promise<number>;
  getById(id: number): Promise<Pet | null>;
  getAll(listPetsRequest: ListPetsRequest): Promise<Pet[]>;
}
