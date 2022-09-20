import { expect, test } from "vitest";
import { Gemre } from "../../api/entities/gemre";

test("create an gemre", () => {
  const gemre = new Gemre({
    id: 1,
    name: "Male",
  });

  expect(gemre).toBeInstanceOf(Gemre);
  expect(gemre.name).toEqual("Male");
});
