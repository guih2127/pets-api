import { Genre } from "../../entities/genre";

export interface IGenresRepository {
  getAll(): Promise<Genre[]>;
  getById(id: number): Promise<Genre | null>;
  create(genre: Genre): Promise<number>;
}
