"use server";

import { LoginType } from "@/types/login";
import { RegisterType } from "@/types/register";

export async function login(data: LoginType) {
  const email = data.email;
  const password = data.password;

  console.log("SERVER", { email, password });
  // TODO: Validar usuário e criar sessão
}

export async function register(data: RegisterType) {
  console.log("SERVER", { data });
  // TODO: Criar novo usuário
}
