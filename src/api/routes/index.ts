import { Router } from "express";
import petsRouter from "./pets-routes";

const routes = Router();

routes.use("/pets", petsRouter);

export default routes;
