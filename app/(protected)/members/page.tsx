import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membros | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Members() {
  return (
    <main className="flex flex-1 flex-col w-full pl-8 pr-10 pt-6 pb-10 gap-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>Membros</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seus membros.
          </p>
        </div>
      </div>
    </main>
  );
}
