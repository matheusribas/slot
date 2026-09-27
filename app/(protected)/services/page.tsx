import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Services() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h2>Serviços</h2>
        <p className="text-muted-foreground">
          Aqui você pode visualizar e gerenciar seus serviços.
        </p>
      </div>
    </div>
  );
}
