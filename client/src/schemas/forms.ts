import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(6, "Mínimo de 6 Caracteres.")
      .max(26, "Máximo de 26 Caracteres."),
    lastName: z
      .string()
      .min(3, "Mínimo de 6 Caracteres.")
      .max(15, "Máximo de 15 Caracteres."),
    email: z
      .string()
      .email("Email Inválido.")
      .max(128, "Máximo de 128 Caracteres"),
    cpf: z
      .string()
      .min(11, "Cpf Inválido.")
      .max(11, "Cpf deve ter 11 dígitos."),
    password: z
      .string()
      .min(6, "Mínimo de 6 caracteres.")
      .max(26, "Máximo de 26 Caracteres."),
    confirmPassword: z.string().min(1, "Confirmação de senha necessária."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Senhas devem ser iguais.",
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email("Email Inválido.")
    .max(128, "Máximo de 128 Caracteres"),
  password: z
    .string()
    .min(6, "Mínimo de 6 caracteres.")
    .max(26, "Máximo de 26 Caracteres."),
});

export type IRegisterSchema = z.infer<typeof registerSchema>;
export type ILoginSchema = z.infer<typeof loginSchema>;
