import { describe, expect, it } from "vitest";
import { Pet } from "../../api/entities/pet";
import { InMemoryPetsRepository } from "../../api/repositories/in-memory/in-memory-pets-repository";
import { CreatePet } from "../../api/use-cases/create-pet";

describe("Create Pet", () => {
  it("should be able to create a pet", () => {
    const petsRepository = new InMemoryPetsRepository();
    const createPet = new CreatePet(petsRepository);

    expect(
      createPet.execute({
        name: "Batata",
        description: "Um cachorro",
        breedId: 1,
        gemreId: 1,
        speciesId: 1,
        userId: 1,
        pictures: ["picture1", "picture2"],
      })
    ).resolves.toBeInstanceOf(Pet);
  });
});
