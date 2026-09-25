import Calendar from "@/components/feature/calendar";
import { ModalCreateEvent } from "@/components/feature/modal-create-event";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendário | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Home() {
  return (
    <main className="flex flex-1 flex-col w-full pl-8 pr-10 py-6 gap-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>Calendário</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seus agendamentos.
          </p>
        </div>

        <ModalCreateEvent />
      </div>

      <Calendar />
    </main>
  );
}
