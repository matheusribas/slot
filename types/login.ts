import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("Digite um e-mail válido"),
  password: z
    .string("Digite uma senha válida")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .max(25, "A senha deve ter no máximo 25 caracteres"),
});
export type LoginType = z.infer<typeof loginSchema>;
