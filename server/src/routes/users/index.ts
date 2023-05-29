import { Router } from "express";
import { validateSchema } from "../../middlewares/global/validateSchema";
import { userSchemaCreation } from "../../schemas/users";
import { userExistsMiddleware } from "../../middlewares/users/userExists";
import { userIsAuthenticatedMiddleware } from "../../middlewares/users/userIsAuthenticated.middleware";
import {
  createUserController,
  listUserController,
} from "../../controllers/users";

const usersRoutes = Router();

usersRoutes.post(
  "",
  validateSchema(userSchemaCreation),
  userExistsMiddleware,
  createUserController
);

usersRoutes.get("", userIsAuthenticatedMiddleware, listUserController);

export { usersRoutes };
