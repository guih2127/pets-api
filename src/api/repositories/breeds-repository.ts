import { Breed } from "../entities/breed";
import { IBreedsRepository } from "./interfaces/breeds-repository";
import connection from "../database/mysql-connection";

export class BreedRepositorys implements IBreedsRepository {
  getAllBySpeciesId(speciesId: number): Promise<Breed[]> {
    throw new Error("Method not implemented");
  }

  getById(id: number): Promise<Breed> {
    throw new Error("Method not implemented.");
  }

  create(breed: Breed): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
