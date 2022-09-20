import { Genre } from "../../entities/genre";
import { GenresRepository } from "../interfaces/genres-repository";

export class InMemoryGenreRepository implements GenresRepository {
  public genres: Genre[];

  async getAll(): Promise<Genre[]> {
    return this.genres;
  }
}
