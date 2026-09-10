"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

export function ModalCreateEvent() {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={
            <Button variant="default" size="lg" className="flex gap-2">
              <PlusIcon />
              Novo agendamento
            </Button>
          }
        />
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">Novo agendamento</DialogTitle>
            <DialogDescription>
              Crie um novo agendamento preenchendo os campos abaixo
            </DialogDescription>
          </DialogHeader>
          <DialogMain>
            <h5>Conteudo do modal</h5>
          </DialogMain>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancelar</Button>} />
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
