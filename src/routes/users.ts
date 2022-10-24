import { Router } from "express";
import { UsersController } from "../controllers";

const userRoutes = Router();

userRoutes.post("/", UsersController.create);
userRoutes.get("/", UsersController.list);
userRoutes.get("/:id", UsersController.findById);
userRoutes.patch("/:id", UsersController.update);
userRoutes.delete("/:id", UsersController.delete);

export default userRoutes;
