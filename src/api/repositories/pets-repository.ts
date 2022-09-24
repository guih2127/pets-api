import { RowDataPacket } from "mysql2";
import mySqlConnection from "../database/mysql-connection";
import { Pet } from "../entities/pet";
import { ListPetsRequest } from "../requests/list-pets-request";
import { RepositoryUtils } from "../utils/repository-utils";
import { IPetsRepository } from "./interfaces/pets-repository";

export class PetsRepository implements IPetsRepository {
  async getAll(listPetsRequest: ListPetsRequest): Promise<Pet[]> {
    const connection = await mySqlConnection();

    const { name, speciesId, genreId, userId, breedId, pageSize, pageNumber } =
      listPetsRequest;
    const { limit, offset } = RepositoryUtils.createLimitAndOffset(
      pageNumber,
      pageSize
    );
    const likeName = RepositoryUtils.createLikeParam(name);

    const [rows] = await connection.execute(
      `
        SELECT * FROM pets 
        WHERE name LIKE IFNULL(?, name)
        AND speciesId = IFNULL(?, speciesId)
        AND genreId = IFNULL(?, genreId)
        AND userId = IFNULL(?, userId)
        AND breedId = IFNULL(?, breedId)
        LIMIT ?
        OFFSET ?
      `,
      [likeName, speciesId, genreId, userId, breedId, limit, offset]
    );

    const pets = rows.map((row: RowDataPacket) => {
      return new Pet({
        id: row.id,
        name: row.name,
        picture: row.picture,
        description: row.description,
        userId: row.userId,
        speciesId: row.speciesId,
        genreId: row.genreId,
        breedId: row.breedId,
      });
    });

    return pets;
  }

  async create(pet: Pet): Promise<number> {
    const connection = await mySqlConnection();

    const { name, description, picture, userId, speciesId, breedId, genreId } =
      pet;

    const [result] = await connection.execute(
      `INSERT INTO pets 
        (name, description, picture, userId, speciesId, breedId, genreId) 
      VALUES
        (?, ?, ?, ?, ?, ?, ?)`,
      [name, description, picture, userId, speciesId, breedId, genreId]
    );

    return result.insertId;
  }

  async getById(id: number): Promise<Pet> {
    const connection = await mySqlConnection();

    const [rows] = await connection.execute("SELECT * FROM pets WHERE id = ?", [
      id,
    ]);

    if (!rows.length) return null;

    const pet = new Pet({
      id: rows[0].id,
      name: rows[0].name,
      description: rows[0].description,
      picture: rows[0].picture,
      userId: rows[0].userId,
      speciesId: rows[0].speciesId,
      breedId: rows[0].breedId,
      genreId: rows[0].genreId,
    });

    return pet;
  }
}
