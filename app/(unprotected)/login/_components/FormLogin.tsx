"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/app/actions";
import { Marker, MarkerContent } from "@/components/ui/marker";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginType } from "@/types/login";

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    login(data);
  };

  const handleSignInGoogle = () => {
    // TODO: Implementar login com Google
    console.log("Sign in with Google");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            {...register("email")}
            placeholder="fulano@gmail.com"
            aria-invalid={errors?.email ? "true" : "false"}
          />
          {errors?.email && (
            <FieldDescription className="text-destructive">
              {errors.email.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••"
            {...register("password")}
            aria-invalid={errors?.password ? "true" : "false"}
          />
          {errors?.password && (
            <FieldDescription className="text-destructive">
              {errors.password.message}
            </FieldDescription>
          )}
        </Field>
      </FieldGroup>

      <Button type="submit">Entrar</Button>
      <Marker variant="separator">
        <MarkerContent>Ou acesse com</MarkerContent>
      </Marker>
      <Button type="button" className="flex gap-2" onClick={handleSignInGoogle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.77h3.63c2.13-1.96 3.36-4.84 3.36-8.18Z"
          />
          <path
            fill="#34A853"
            d="M12 21.5c3.04 0 5.59-1.01 7.45-2.73l-3.63-2.77c-1.01.68-2.3 1.09-3.82 1.09-2.94 0-5.43-1.98-6.32-4.65H1.93v2.85C3.78 18.98 7.55 21.5 12 21.5Z"
          />
          <path
            fill="#FBBC05"
            d="M5.68 12.44a7.35 7.35 0 0 1 0-4.58V5.01H1.93a9.5 9.5 0 0 0 0 10.28l3.75-2.85Z"
          />
          <path
            fill="#EA4335"
            d="M12 4.5c1.65 0 3.14.57 4.31 1.69l3.24-3.24C17.59 1.13 15.04 0 12 0 7.55 0 3.78 2.52 1.93 6.19l3.75 2.85C6.57 6.48 9.06 4.5 12 4.5Z"
          />
        </svg>
        Google
      </Button>
    </form>
  );
}
