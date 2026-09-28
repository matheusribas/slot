import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time | Slot",
  description: "Encontre um horário para um serviço de forma rápida e prática.",
};
export default function Team() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <h2>Time</h2>
        <p className="text-muted-foreground">
          Aqui você pode visualizar e gerenciar seu time.
        </p>
      </div>
    </div>
  );
}
