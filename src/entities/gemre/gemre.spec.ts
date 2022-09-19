import { expect, test } from "vitest";
import { Gemre } from "./gemre";
import { v4 as uuidv4 } from "uuid";

test("create an gemre", () => {
  const gemre = new Gemre({
    uuid: uuidv4(),
    name: "Male",
  });

  expect(gemre).toBeInstanceOf(Gemre);
  expect(gemre.name).toEqual("Male");
});
