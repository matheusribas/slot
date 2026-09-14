import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string("Digite um nome válido")
      .min(2, "O nome deve ter pelo menos 2 caracteres")
      .max(50, "O nome deve ter no máximo 50 caracteres"),

    phone: z
      .string("Digite um telefone válido")
      .transform((value) => value.replace(/\D/g, ""))
      .refine(
        (value) => value.length === 10 || value.length === 11,
        "Digite um telefone válido",
      ),

    email: z.email("Digite um e-mail válido"),

    password: z
      .string("Digite uma senha válida")
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .max(25, "A senha deve ter no máximo 25 caracteres"),

    confirmPassword: z
      .string("Confirme sua senha")
      .min(1, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas são diferentes",
    path: ["confirmPassword"],
  });

export type RegisterType = z.infer<typeof registerSchema>;
