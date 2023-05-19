import { User } from "../models/users";
import { IUserSchemaCreation, userSchemaResponse } from "../schemas/users";

async function createUserService(payload: IUserSchemaCreation) {
  const user = await User.create(payload);
  const filteredUser = userSchemaResponse.parse(user);
  return filteredUser;
}

async function listUserService(id: string) {
  const user = await User.findOne({ id });
  const filteredUser = userSchemaResponse.parse(user);
  return filteredUser;
}

export { createUserService, listUserService };
