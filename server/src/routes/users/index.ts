import { Router } from "express";
import { createUserController } from "../../controllers/users";

const userRoutes = Router();

userRoutes.post("", createUserController);

export { userRoutes };
