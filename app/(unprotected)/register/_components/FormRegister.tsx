"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { register } from "@/app/actions";
import { SubmitHandler, useForm } from "react-hook-form";
import { registerSchema, RegisterType } from "@/types/register";
import { zodResolver } from "@hookform/resolvers/zod";

export function FormRegister() {
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = (data) => {
    register(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="name">Nome</FieldLabel>
            <Input
              id="name"
              {...registerForm("name")}
              placeholder="Fulano da Silva"
              aria-invalid={errors?.name ? "true" : "false"}
            />
            {errors?.name && (
              <FieldDescription className="text-destructive">
                {errors.name.message}
              </FieldDescription>
            )}
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Telefone/WhatsApp</FieldLabel>
            <Input
              id="phone"
              {...registerForm("phone")}
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="(00) 00000-0000"
              maxLength={15}
              aria-invalid={errors?.phone ? "true" : "false"}
            />
            {errors?.phone && (
              <FieldDescription className="text-destructive">
                {errors.phone.message}
              </FieldDescription>
            )}
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            {...registerForm("email")}
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
            {...registerForm("password")}
            type="password"
            placeholder="••••••••"
            aria-invalid={errors?.password ? "true" : "false"}
          />
          {errors?.password && (
            <FieldDescription className="text-destructive">
              {errors.password.message}
            </FieldDescription>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirme a senha</FieldLabel>
          <Input
            id="confirmPassword"
            {...registerForm("confirmPassword")}
            type="password"
            placeholder="••••••••"
            aria-invalid={errors?.confirmPassword ? "true" : "false"}
          />
          {errors.confirmPassword && (
            <FieldDescription className="text-destructive">
              {errors.confirmPassword.message}
            </FieldDescription>
          )}
        </Field>
      </FieldGroup>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}
