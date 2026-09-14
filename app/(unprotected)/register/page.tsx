import { Metadata } from "next";
import { FormRegister } from "./_components/FormRegister";

export const metadata: Metadata = {
  title: "Cadastrar | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};

export default function RegisterPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3>Cadastrar nova conta</h3>
        <p className="text-muted-foreground">
          Preencha os campos para criar sua conta
        </p>
      </div>
      <FormRegister />
      <p className="text-muted-foreground text-xs">
        Já tenho uma conta?{" "}
        <a href="/login" className="text-primary">
          Clique aqui e acesse
        </a>
      </p>
    </>
  );
}
