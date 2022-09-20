import { Genre } from "../../entities/genre";

export interface GenresRepository {
  getAll(): Promise<Genre[]>;
}
