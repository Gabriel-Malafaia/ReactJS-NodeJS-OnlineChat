import { Request, Response } from "express";
import { ISessionSchemaCreation } from "../schemas/sessions";
import { IUserResponse } from "../interfaces/users";
import { createSessionService } from "../services/sessions";

async function createSessionController(req: Request, res: Response) {
  const payload: ISessionSchemaCreation = req.body;
  const user: IUserResponse = res.locals.user;
  
  const data = await createSessionService(payload, user.password, user.id);
  return res.status(200).json(data);
}

export { createSessionController };
