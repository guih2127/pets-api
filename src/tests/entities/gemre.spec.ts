import { expect, test } from "vitest";
import { Genre } from "../../api/entities/genre";

test("create an gemre", () => {
  const genre = new Genre({
    id: 1,
    name: "Male",
  });

  expect(genre).toBeInstanceOf(Genre);
  expect(genre.name).toEqual("Male");
});
