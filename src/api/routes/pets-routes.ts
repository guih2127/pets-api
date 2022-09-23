import { Router } from "express";
import PetsController from "../controllers/pets-controller";

const petsRouter = Router();
const petsController = new PetsController();

petsRouter.get("/", (request, response) => {
  return response.json("OK");
});

petsRouter.post("/", (request, response) => {
  return petsController.create(request, response);
});

export default petsRouter;
