import mongoose from "mongoose";
import { IUserSchemaCreation } from "../schemas/users";

const { Schema } = mongoose;

const usersSchema = new Schema<IUserSchemaCreation>(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUserSchemaCreation>("Users", usersSchema);
export { User };
