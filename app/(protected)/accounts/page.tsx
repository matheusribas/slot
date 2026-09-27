import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contas | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Accounts() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h2>Contas</h2>
        <p className="text-muted-foreground">
          Aqui você pode visualizar e gerenciar suas contas.
        </p>
      </div>
    </div>
  );
}
