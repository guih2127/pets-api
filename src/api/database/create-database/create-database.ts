import mySqlConnection from "../mysql-connection";
import { createDatabaseQueries } from "./create-database-queries";

async function createTable(sql: string) {
  const connection = await mySqlConnection();
  await connection.execute(sql);
}

(async function createTables() {
  try {
    await createTable(createDatabaseQueries.createTableSpecies);
    await createTable(createDatabaseQueries.createTableGenres);
    await createTable(createDatabaseQueries.createTableBreeds);
    await createTable(createDatabaseQueries.createTableSpeciesBreeds);
    await createTable(createDatabaseQueries.createTableUsers);
    await createTable(createDatabaseQueries.createTablePets);
    console.log("Tabelas inseridas com sucesso!");
  } catch (err) {
    console.log(err);
  }
})();
