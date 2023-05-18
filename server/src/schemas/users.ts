import { z } from "zod";
import { hashSync } from "bcryptjs";

const userSchemaCreation = z.object({
  name: z.string().max(32),
  username: z.string().max(26),
  email: z.string().email().max(128),
  cpf: z.string().min(11).max(14),
  password: z.string().transform((value) => hashSync(value)),
});

const userSchemaResponse = userSchemaCreation
  .extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    __v: z.number(),
  })
  .omit({
    password: true,
  });

type IUserSchemaCreation = z.infer<typeof userSchemaCreation>;

export { userSchemaCreation, IUserSchemaCreation, userSchemaResponse };
