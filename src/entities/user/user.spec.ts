import { expect, test } from "vitest";
import { User } from "../user/user";
import { v4 as uuidv4 } from "uuid";

test("create an user", () => {
  const user = new User({
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

  expect(user).toBeInstanceOf(User);
  expect(user.name).toEqual("Guilherme");
});
