import { Genre } from "../../entities/genre";
import { GenresRepository } from "../interfaces/genres-repository";

export class InMemoryGenresRepository implements GenresRepository {
  public genres: Genre[];

  async getById(id: number): Promise<Genre | null> {
    const genres = this.genres.find((genre) => genre.id === id);

    if (!genres) return null;

    return genres;
  }

  async getAll(): Promise<Genre[]> {
    return this.genres;
  }
}
