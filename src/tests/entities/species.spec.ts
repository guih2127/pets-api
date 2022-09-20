import { expect, test } from "vitest";
import { Species } from "../../api/entities/species";

test("create an species", () => {
  const species = new Species({
    id: 1,
    name: "Dog",
  });

  expect(species).toBeInstanceOf(Species);
  expect(species.name).toEqual("Dog");
});
