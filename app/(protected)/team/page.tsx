import { Metadata } from "next";
import { ButtonModalTrigger } from "./_components/button-modal-trigger";
import { ContentMembers } from "./_components/content-members";

export const metadata: Metadata = {
  title: "Equipe | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Team() {
  return (
    <>
      <div className="flex flex-col gap-4 sm:justify-between sm:items-center sm:flex-row">
        <div className="flex flex-col gap-2">
          <h2>Equipe</h2>
          <p className="text-muted-foreground">
            Aqui você pode visualizar e gerenciar seu equipe.
          </p>
        </div>

        <ButtonModalTrigger />
      </div>

      <ContentMembers />
    </>
  );
}
