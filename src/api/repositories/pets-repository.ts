import mySqlConnection from "../database/mysql-connection";
import { Pet } from "../entities/pet";
import { IPetsRepository } from "./interfaces/pets-repository";

export class PetsRepository implements IPetsRepository {
  public connection: any;

  constructor() {
    this.connection = mySqlConnection();
  }

  async create(pet: Pet): Promise<number> {
    const { name, description, picture, userId, speciesId, breedId, genreId } =
      pet;

    const [result] = await this.connection.execute(
      `INSERT INTO pets 
        (name, description, picture, userId, speciesId, breedId, genreId) 
      VALUES
        (?, ?, ?, ?, ?, ?, ?)`,
      [name, description, picture, userId, speciesId, breedId, genreId]
    );

    return result.insertId;
  }

  async getById(id: number): Promise<Pet> {
    const [rows] = await this.connection.execute(
      "SELECT * FROM pets WHERE id = id",
      [id]
    );

    if (!rows) return null;

    const breed = new Pet({
      id: rows[0].id,
      name: rows[0].name,
      description: rows[0].description,
      picture: rows[0].picture,
      userId: rows[0].userId,
      speciesId: rows[0].speciesId,
      breedId: rows[0].breedId,
      genreId: rows[0].genreId,
    });

    return breed;
  }
}
