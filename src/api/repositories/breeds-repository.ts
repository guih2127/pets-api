import { Breed } from "../entities/breed";
import { IBreedsRepository } from "./interfaces/breeds-repository";
import mySqlConnection from "../database/mysql-connection";
import { RowDataPacket } from "mysql2";

export class BreedsRepository implements IBreedsRepository {
  async getAll(): Promise<Breed[]> {
    const connection = await mySqlConnection();

    const [rows] = await connection.execute("SELECT * FROM breeds");

    const breeds = rows.map((row: RowDataPacket) => {
      return new Breed({
        id: row.id,
        name: row.name,
      });
    });

    return breeds;
  }

  async getAllBySpeciesId(speciesId: number): Promise<Breed[]> {
    const connection = await mySqlConnection();

    const [rows] = await connection.execute(
      "SELECT * FROM breeds WHERE speciesId = ?",
      [speciesId]
    );

    const breeds = rows.map((row: RowDataPacket) => {
      return new Breed({
        id: row.id,
        name: row.name,
      });
    });

    return breeds;
  }

  async getById(id: number): Promise<Breed> {
    const connection = await mySqlConnection();

    const [rows] = await connection.execute(
      "SELECT * FROM breeds WHERE id = id",
      [id]
    );

    if (!rows) return null;

    const breed = new Breed({
      id: rows[0].id,
      name: rows[0].name,
    });

    return breed;
  }

  async create(breed: Breed): Promise<number> {
    const connection = await mySqlConnection();

    const { name } = breed;

    const [result] = await connection.execute(
      "INSERT INTO breeds (name) VALUES (?)",
      [name]
    );

    return result.insertId;
  }
}
