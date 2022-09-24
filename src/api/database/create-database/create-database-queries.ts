const createTableSpecies = `
  CREATE TABLE species 
  (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, 
    PRIMARY KEY (id)
  );`;

const createTableBreeds = `
  CREATE TABLE breeds
  (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
  );`;

const createTableSpeciesBreeds = `
  CREATE TABLE speciesBreeds
  (
    id INT NOT NULL AUTO_INCREMENT,
    speciesId INT NOT NULL,
    breedId INT NOT NULL,
    FOREIGN KEY (speciesId) REFERENCES species(id),
    FOREIGN KEY (breedId) REFERENCES breeds(id),
    PRIMARY KEY(id)
  );`;

const createTableGenres = `
  CREATE TABLE genres
  (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, 
    PRIMARY KEY (id)
  );`;

const createTableUsers = `
  CREATE TABLE users
  (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(500) NOT NULL, 
    avatar VARCHAR(500) NULL, 
    zipcode VARCHAR(100) NOT NULL, 
    state VARCHAR(100) NOT NULL, 
    country VARCHAR(100) NOT NULL, 
    phone VARCHAR(100) NOT NULL, 
    PRIMARY KEY (id)
  );`;

const createTablePets = `
CREATE TABLE pets 
  (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    picture VARCHAR(500) NULL, 
    PRIMARY KEY (id),
    userId INT NOT NULL, 
    speciesId INT NOT NULL, 
    breedId INT NOT NULL, 
    genreId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (speciesId) REFERENCES species(Id),
    FOREIGN KEY (breedId) REFERENCES breeds(id),
    FOREIGN KEY (genreId) REFERENCES genres(id)
  );`;

export const createDatabaseQueries = {
  createTableBreeds,
  createTableSpecies,
  createTableGenres,
  createTableSpeciesBreeds,
  createTableUsers,
  createTablePets,
};
