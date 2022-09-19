import { expect, test } from "vitest";
import { Breed } from "./breed";
import { v4 as uuidv4 } from "uuid";

test("create an breed", () => {
  const breed = new Breed({
    uuid: uuidv4(),
    name: "SRD",
  });

  expect(breed).toBeInstanceOf(Breed);
  expect(breed.name).toEqual("SRD");
});
