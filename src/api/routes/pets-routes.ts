import { Router } from "express";
import PetsController from "../controllers/pets-controller";

const petsRouter = Router();
const petsController = new PetsController();

petsRouter.get("/", (request, response) => {
  return petsController.getAll(request, response);
});

petsRouter.post("/", (request, response) => {
  return petsController.create(request, response);
});

petsRouter.get("/:id", (request, response) => {
  return petsController.getById(request, response);
});

export default petsRouter;
