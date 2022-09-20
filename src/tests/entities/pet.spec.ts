import { expect, test } from "vitest";
import { Species } from "../../api/entities/species";
import { Genre } from "../../api/entities/genre";
import { User } from "../../api/entities/user";
import { Pet } from "../../api/entities/pet";
import { Breed } from "../../api/entities/breed";

test("create a pet", () => {
  const pictures = ["petPicture1", "petPicture2"];
  const author = new User({
    id: 1,
    name: "Guilherme",
    email: "guih2127@gmail.com",
    password: "123456",
    avatar: "picture1",
    zipcode: "11111-111",
    state: "MG",
    country: "Brasil",
    phone: "99-99999-9999",
  });
  const species = new Species({ id: 1, name: "Shih-Tzu" });
  const breed = new Breed({ id: 1, name: "SRD" });
  const gemre = new Genre({ id: 1, name: "Male" });

  const pet = new Pet({
    id: 1,
    name: "Batata",
    description: "Um cachorro",
    pictures: pictures,
    author: author,
    species: species,
    breed: breed,
    gemre: gemre,
  });

  expect(pet).toBeInstanceOf(Pet);
  expect(pet.author).toEqual(author);
  expect(pet.breed).toEqual(breed);
  expect(pet.species).toEqual(species);
  expect(pet.gemre).toEqual(gemre);
  expect(pet.pictures).toEqual(pictures);
  expect(pet.name).toEqual("Batata");
});
