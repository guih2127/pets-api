import { Breed } from "../entities/breed";
import { IBreedsRepository } from "./interfaces/breeds-repository";
import mySqlConnection from "../database/mysql-connection";
import { RowDataPacket } from "mysql2";

export class BreedRepositorys implements IBreedsRepository {
  public connection: any;

  constructor() {
    this.connection = mySqlConnection();
  }

  async getAll(): Promise<Breed[]> {
    const [rows] = await this.connection.execute("SELECT * FROM breeds");

    const breeds = rows.map((row: RowDataPacket) => {
      return new Breed({
        id: row.id,
        name: row.name,
        speciesId: row.speciesId,
      });
    });

    return breeds;
  }

  async getAllBySpeciesId(speciesId: number): Promise<Breed[]> {
    const [rows] = await this.connection.execute(
      "SELECT * FROM breeds WHERE speciesId = ?",
      [speciesId]
    );

    const breeds = rows.map((row: RowDataPacket) => {
      return new Breed({
        id: row.id,
        name: row.name,
        speciesId: row.speciesId,
      });
    });

    return breeds;
  }

  async getById(id: number): Promise<Breed> {
    const [rows] = await this.connection.execute(
      "SELECT * FROM breeds WHERE id = id",
      [id]
    );

    if (!rows) return null;

    const breed = new Breed({
      id: rows[0].id,
      name: rows[0].name,
      speciesId: rows[0].speciesId,
    });

    return breed;
  }

  async create(breed: Breed): Promise<number> {
    const { name, speciesId } = breed;

    const [result] = await this.connection.execute(
      "INSERT INTO breeds (name, speciesId) VALUES (?, ?)",
      [name, speciesId]
    );

    return result.insertId;
  }
}
