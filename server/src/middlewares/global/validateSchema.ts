import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";
import { AppError } from "../../errors";

const validateSchema = function (schema: ZodTypeAny) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errorMessages = err.errors.map(
          (error) => `${error.path}: ${error.message}`
        );

        const errorMessage: string = errorMessages.join(", ");

        throw new AppError(errorMessage);
      }
    }
  };
};

export { validateSchema };
