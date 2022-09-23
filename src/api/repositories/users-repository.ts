import mySqlConnection from "../database/mysql-connection";
import { User } from "../entities/user";
import { IUsersRepository } from "./interfaces/users-repository";

export class UsersRepository implements IUsersRepository {
  async getById(id: number): Promise<User> {
    const connection = await mySqlConnection();

    const [rows] = await connection.execute(
      "SELECT * FROM users WHERE id = id",
      [id]
    );

    if (!rows) return null;

    const user = new User({
      name: rows[0].name,
      email: rows[0].email,
      password: rows[0].password,
      avatar: rows[0].avatar,
      zipcode: rows[0].zipcode,
      state: rows[0].state,
      country: rows[0].country,
      phone: rows[0].phone,
    });

    return user;
  }

  async create(user: User): Promise<number> {
    const connection = await mySqlConnection();

    const { name, email, password, avatar, zipcode, state, country, phone } =
      user;

    const [result] = await connection.execute(
      `INSERT INTO users 
        (name, email, password, avatar, zipcode, state, country, phone) 
      VALUES 
        (?, ?, ?, ?, ?, ?, ?, ?)`,
      [name, email, password, avatar, zipcode, state, country, phone]
    );

    return result.insertId;
  }
}
