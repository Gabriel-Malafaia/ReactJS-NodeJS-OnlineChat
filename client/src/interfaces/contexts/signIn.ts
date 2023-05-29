import { ILoginSchema, IRegisterSchema } from "../../schemas/forms";

export interface IChildrenNodeType {
  children: React.ReactNode;
}

export interface ISignContext {
  loading: boolean;
  createUserRequest(data: IRegisterSchema): Promise<void>;
  loginUserRequest(data: ILoginSchema): Promise<void>;
}
