import { expect, test } from "vitest";
import { Pet } from "./pet";
import { v4 as uuidv4 } from "uuid";
import { User } from "../user/user";
import { Species } from "../species/Species";
import { Breed } from "../breed/breed";
import { Gemre } from "../gemre/gemre";

test("create a pet", () => {
  const pictures = ["petPicture1", "petPicture2"];
  const author = new User({
    uuid: uuidv4(),
    name: "Guilherme",
    email: "guih2127@gmail.com",
    password: "123456",
    avatar: "picture1",
    zipcode: "11111-111",
    state: "MG",
    country: "Brasil",
    phone: "99-99999-9999",
  });
  const species = new Species({ uuid: uuidv4(), name: "Shih-Tzu" });
  const breed = new Breed({ uuid: uuidv4(), name: "SRD" });
  const gemre = new Gemre({ uuid: uuidv4(), name: "Male" });

  const pet = new Pet({
    uuid: uuidv4(),
    name: "Batata",
    description: "Um cachorro",
    pictures: pictures,
    author: author,
    species: species,
    breed: breed,
    gemre: gemre,
  });

  expect(pet).toBeInstanceOf(Pet);
  expect(pet.name).toEqual("Batata");
});
