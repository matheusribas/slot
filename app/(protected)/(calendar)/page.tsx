import { Metadata } from "next";
import Calendar from "./_components/calendar";
import { ButtonModalTrigger } from "./_components/button-modal-trigger";

export const metadata: Metadata = {
  title: "Calendário | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2>Calendário</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seus agendamentos.
          </p>
        </div>

        <ButtonModalTrigger />
      </div>

      <Calendar />
    </>
  );
}
