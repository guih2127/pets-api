import { expect, test } from "vitest";
import { Species } from "./Species";
import { v4 as uuidv4 } from "uuid";

test("create an Species", () => {
  const species = new Species({
    uuid: uuidv4(),
    name: "Dog",
  });

  expect(species).toBeInstanceOf(Species);
  expect(species.name).toEqual("Dog");
});
