import { expect, test } from "vitest";
import { Species } from "../../api/entities/species";
import { Genre } from "../../api/entities/genre";
import { User } from "../../api/entities/user";
import { Pet } from "../../api/entities/pet";
import { Breed } from "../../api/entities/breed";

test("create a pet", () => {
  const pet = new Pet({
    id: 1,
    name: "Batata",
    description: "Um cachorro",
    picture: "picture",
    userId: 1,
    speciesId: 1,
    breedId: 1,
    genreId: 1,
  });

  expect(pet).toBeInstanceOf(Pet);
});
