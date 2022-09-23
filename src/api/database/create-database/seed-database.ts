import { Breed } from "../../entities/breed";
import { Genre } from "../../entities/genre";
import { Pet } from "../../entities/pet";
import { Species } from "../../entities/species";
import { User } from "../../entities/user";
import { BreedsRepository } from "../../repositories/breeds-repository";
import { GenresRepository } from "../../repositories/genres-repository";
import { PetsRepository } from "../../repositories/pets-repository";
import { SpeciesRepository } from "../../repositories/species-repository";
import { UsersRepository } from "../../repositories/users-repository";

const maleGenge = new Genre({ name: "Masculino" });
const femaleGenge = new Genre({ name: "Feminino" });

const dogSpecies = new Species({ name: "Dog" });
const catSpecies = new Species({ name: "Cat" });

const srdBreed = new Breed({ name: "SRD" });

const user = new User({
  name: "ADMIN",
  email: "admin@email.com.br",
  password: "111111",
  avatar: null,
  zipcode: "11111",
  state: "Minas Gerais",
  country: "Brasil",
  phone: "11-11111-1111",
});

const pet = new Pet({
  name: "Pet",
  description: "Descrição",
  picture: null,
  userId: 1,
  speciesId: 1,
  breedId: 1,
  genreId: 1,
});

(async function seedDatabase() {
  try {
    const petsRepository = new PetsRepository();
    const usersRepository = new UsersRepository();
    const breedsRepository = new BreedsRepository();
    const speciesRepository = new SpeciesRepository();
    const genresRepository = new GenresRepository();

    await genresRepository.create(maleGenge);
    await genresRepository.create(femaleGenge);

    await speciesRepository.create(dogSpecies);
    await speciesRepository.create(catSpecies);

    await breedsRepository.create(srdBreed);

    await usersRepository.create(user);

    await petsRepository.create(pet);

    console.log("Registros inseridos com sucesso!");
  } catch (err) {
    console.log(err);
  }
})();
