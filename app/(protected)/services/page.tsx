import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Services() {
  return (
    <main className="flex flex-1 flex-col w-full pl-8 pr-10 py-6 gap-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>Serviços</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seus serviços.
          </p>
        </div>
      </div>
    </main>
  );
}
