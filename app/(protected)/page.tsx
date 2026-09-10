import Calendar from "@/components/feature/Calendar";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendário | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Home() {
  return (
    <main className="flex flex-1 flex-col w-full px-10 py-6 gap-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>Calendário</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seu calendário.
          </p>
        </div>

        <Button variant="default" size="lg" className="flex gap-2">
          <PlusIcon />
          Novo agendamento
        </Button>
      </div>

      <Calendar />
    </main>
  );
}
