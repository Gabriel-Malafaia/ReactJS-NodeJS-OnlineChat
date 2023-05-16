import { Request, Response } from "express";
import { User } from "../models/users";

async function createUserController(req: Request, res: Response) {
  const userData = req.body;
  const user = await User.create(userData);

  return res.status(201).json(user);
}

export { createUserController };
