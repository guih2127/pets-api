import { expect, test } from "vitest";
import { Breed } from "../../api/entities/breed";

test("create an breed", () => {
  const breed = new Breed({
    id: 1,
    name: "SRD",
  });

  expect(breed).toBeInstanceOf(Breed);
  expect(breed.name).toEqual("SRD");
});
