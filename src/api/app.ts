import { Express } from "express";
import routes from "./routes";

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
