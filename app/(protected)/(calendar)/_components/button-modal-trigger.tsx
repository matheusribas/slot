"use client";
import { Button } from "@/components/ui/button";
import { useBoundStore } from "@/stores";
import { PlusIcon } from "lucide-react";

export function ButtonModalTrigger() {
  const openModal = useBoundStore((state) => state.openModal);

  const handleOpenModal = () => {
    openModal("create-event");
  };

  return (
    <Button
      variant="default"
      size="lg"
      className="flex gap-2"
      onClick={handleOpenModal}
    >
      <PlusIcon />
      Novo agendamento
    </Button>
  );
}
