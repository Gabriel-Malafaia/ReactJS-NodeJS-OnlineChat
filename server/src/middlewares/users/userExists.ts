import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";
import { IUserSchemaCreation } from "../../schemas/users";
import { User } from "../../models/users";

const userExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: IUserSchemaCreation = req.body;
  const { email } = payload;
  const { originalUrl: path } = req;

  const user = await User.findOne({ email });

  if (user && path == "/users") {
    throw new AppError("User with that email is already registered.", 409);
  }

  if (!user && path == "/sessions") {
    throw new AppError("Email or password is invalid.", 401);
  }

  res.locals.user = user;
  return next();
};

export { userExistsMiddleware };
