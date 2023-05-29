import { Router } from "express";
import { validateSchema } from "../../middlewares/global/validateSchema";
import { userExistsMiddleware } from "../../middlewares/users/userExists";
import { sessionSchemaCreation } from "../../schemas/sessions";
import { createSessionController } from "../../controllers/sessions";

const sessionsRoutes = Router();

sessionsRoutes.post(
  "",
  validateSchema(sessionSchemaCreation),
  userExistsMiddleware,
  createSessionController
);

export { sessionsRoutes };
