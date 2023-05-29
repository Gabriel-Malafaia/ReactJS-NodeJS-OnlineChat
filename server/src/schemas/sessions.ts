import { z } from "zod";

const sessionSchemaCreation = z.object({
  email: z.string().email().max(127),
  password: z.string().max(127),
});

type ISessionSchemaCreation = z.infer<typeof sessionSchemaCreation>;

export { sessionSchemaCreation, ISessionSchemaCreation };
