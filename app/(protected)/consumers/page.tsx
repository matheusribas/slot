import { Metadata } from "next";
import { TableConsumers } from "./_components/table-consumers";

export const metadata: Metadata = {
  title: "Clientes | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Consumers() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>Clientes</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seus clientes.
          </p>
        </div>
      </div>

      <TableConsumers />
    </>
  );
}
