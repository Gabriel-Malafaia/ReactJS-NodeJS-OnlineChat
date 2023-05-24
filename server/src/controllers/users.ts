import { Request, Response } from "express";
import { IUserSchemaCreation } from "../schemas/users";
import { createUserService, listUserService } from "../services/users";

async function createUserController(req: Request, res: Response) {
  const payload: IUserSchemaCreation = req.body;
  const data = await createUserService(payload);
  return res.status(201).json(data);
}

async function listUserController(req: Request, res: Response) {
  const id = res.locals.userId;
  const data = await listUserService(id);
  return res.status(200).json(data);
}

export { createUserController, listUserController };
