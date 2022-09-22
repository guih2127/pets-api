import { RowDataPacket } from "mysql2";
import mySqlConnection from "../database/mysql-connection";
import { Genre } from "../entities/genre";
import { IGenresRepository } from "./interfaces/genres-repository";

export class GenresRepository implements IGenresRepository {
  public connection: any;

  constructor() {
    this.connection = mySqlConnection();
  }

  async getAll(): Promise<Genre[]> {
    const [rows] = await this.connection.execute("SELECT * FROM genres");

    const genres = rows.map((row: RowDataPacket) => {
      return new Genre({
        id: row.id,
        name: row.name,
      });
    });

    return genres;
  }

  async getById(id: number): Promise<Genre> {
    const [rows] = await this.connection.execute(
      "SELECT * FROM genres WHERE id = id",
      [id]
    );

    if (!rows) return null;

    const genre = new Genre({
      id: rows[0].id,
      name: rows[0].name,
    });

    return genre;
  }

  async create(genre: Genre): Promise<number> {
    const { name } = genre;

    const [result] = await this.connection.execute(
      "INSERT INTO genres (name) VALUES (?)",
      [name]
    );

    return result.insertId;
  }
}
