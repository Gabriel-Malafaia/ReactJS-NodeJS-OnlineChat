import { Router } from "express";
import { validateSchema } from "../../middlewares/global/validateSchema";
import { sessionSchemaCreation } from "../../schemas/sessions";
import { userExistsMiddleware } from "../../middlewares/users/userExists";
import { createSessionController } from "../../controllers/sessions";

const sessionsRoutes = Router();

sessionsRoutes.post(
  "",
  validateSchema(sessionSchemaCreation),
  userExistsMiddleware,
  createSessionController
);

export { sessionsRoutes };
