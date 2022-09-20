import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("species", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
    })
    .createTable("genres", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
    })
    .createTable("breeds", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.integer("speciesId").unsigned().notNullable();

      table.foreign("speciesId").references("id").inTable("species");
    })
    .createTable("users", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.string("email", 100).notNullable();
      table.string("password", 500).notNullable();
      table.string("avatar", 1000).notNullable();
      table.string("zipcode", 50).notNullable();
      table.string("state", 100).notNullable();
      table.string("country", 100).notNullable();
      table.string("phone", 50).notNullable();
    })
    .createTable("pets", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.string("description", 255).notNullable();
      table.string("picture", 1000).notNullable();
      table.integer("authorId").unsigned().notNullable();
      table.integer("speciesId").unsigned().notNullable();
      table.integer("breedId").unsigned().notNullable();
      table.integer("genreId").unsigned().notNullable();

      table.foreign("authorId").references("id").inTable("users");
      table.foreign("speciesId").references("id").inTable("species");
      table.foreign("breedId").references("id").inTable("breeds");
      table.foreign("genreId").references("id").inTable("genres");
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("species")
    .dropTable("genres")
    .dropTable("pets")
    .dropTable("breeds")
    .dropTable("users");
}
