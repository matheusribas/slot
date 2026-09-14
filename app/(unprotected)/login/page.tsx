import { Metadata } from "next";
import { FormLogin } from "./_components/FormLogin";

export const metadata: Metadata = {
  title: "Acessar conta | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3>Acessar conta</h3>
        <p className="text-muted-foreground">
          Preencha os campos para acessar sua conta
        </p>
      </div>

      <FormLogin />

      <p className="text-muted-foreground text-xs">
        Ainda não tem uma conta?{" "}
        <a href="/register" className="text-primary">
          Clique aqui e cadastre-se
        </a>
      </p>
    </>
  );
}
