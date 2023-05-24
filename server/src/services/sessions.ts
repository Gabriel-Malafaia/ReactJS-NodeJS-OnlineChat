import { compareSync } from "bcryptjs";
import { ISessionSchemaCreation } from "../schemas/sessions";
import { AppError } from "../errors";
import { sign } from "jsonwebtoken";

async function createSessionService(
  payload: ISessionSchemaCreation,
  userPass: string,
  userId: string
) {
  const { password, email } = payload;
  const isEqualPassword = compareSync(password, userPass);

  if (!isEqualPassword) {
    throw new AppError("Email or password is invalid.", 401);
  }

  const secretKey = process.env.SECRET_KEY || "S3CR3TK3Y";
  const token = sign({ id: userId }, secretKey, {
    expiresIn: "24h",
    subject: email,
  });

  return { token };
}

export { createSessionService };
