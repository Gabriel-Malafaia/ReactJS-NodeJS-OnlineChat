import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { AppError } from "../../errors";
import { IJwtPayload } from "../../interfaces/users";

const userIsAuthenticatedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1];

  if (!token) {
    throw new AppError("Missing authorization token.", 401);
  }

  try {
    decode(token);
  } catch {
    throw new AppError("Missing authorization token.", 401);
  }

  const { id } = decode(token) as IJwtPayload;

  res.locals.userId = id;
  return next();
};

export { userIsAuthenticatedMiddleware };
