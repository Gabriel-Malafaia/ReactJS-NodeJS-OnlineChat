import { JwtPayload } from "jsonwebtoken";

interface IJwtPayload extends JwtPayload {
  id: string;
}

interface IUserResponse {
  id: string;
  username: string;
  password: string;
  email: string;
  cpf: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export { IJwtPayload, IUserResponse };
