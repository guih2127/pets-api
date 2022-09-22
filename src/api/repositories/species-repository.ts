import { RowDataPacket } from "mysql2";
import mySqlConnection from "../database/mysql-connection";
import { Species } from "../entities/species";
import { ISpeciesRepository } from "./interfaces/species-repository";

export class SpeciesRepository implements ISpeciesRepository {
  public connection: any;

  constructor() {
    this.connection = mySqlConnection();
  }

  async getAll(): Promise<Species[]> {
    const [rows] = await this.connection.execute("SELECT * FROM species");

    const species = rows.map((row: RowDataPacket) => {
      return new Species({
        id: row.id,
        name: row.name,
      });
    });

    return species;
  }

  async getById(id: number): Promise<Species> {
    const [rows] = await this.connection.execute(
      "SELECT * FROM species WHERE id = id",
      [id]
    );

    if (!rows) return null;

    const species = new Species({
      id: rows[0].id,
      name: rows[0].name,
    });

    return species;
  }

  async create(species: Species): Promise<number> {
    const { name } = species;

    const [result] = await this.connection.execute(
      "INSERT INTO species (name) VALUES (?)",
      [name]
    );

    return result.insertId;
  }
}
