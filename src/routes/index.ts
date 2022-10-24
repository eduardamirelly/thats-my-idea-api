import { Router } from "express";

import userRoutes from "./users";

const routes = Router();

routes.get("/", (request, response) => response.send());

routes.use("/users", userRoutes);

export default routes;
