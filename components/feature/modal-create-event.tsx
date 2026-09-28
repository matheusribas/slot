"use client";

import { useState } from "react";
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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useBoundStore } from "@/stores";

export function ModalCreateEvent() {
  const isOpen = useBoundStore((state) => state.isOpen);
  const modal = useBoundStore((state) => state.modal);
  const closeModal = useBoundStore((state) => state.closeModal);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const minDate = new Date();
  const minHour = `${minDate.getHours() + 1}`.padStart(2, "0");
  const minTime = `${minHour}:00:00`;
  const openModal = isOpen && modal === "create-event";

  const handleOpenChange = (open: boolean) => {
    if (!open) closeModal("create-event");
  };

  return (
    <Dialog open={openModal} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Novo agendamento</DialogTitle>
          <DialogDescription>
            Crie um novo agendamento preenchendo os campos
          </DialogDescription>
        </DialogHeader>
        <DialogMain>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Título</FieldLabel>
              <Input
                id="title"
                name="title"
                placeholder="Ex.: Corte e barba"
                required
              />
            </Field>

            {/* // TODO: incluir responsável */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="date">Data</FieldLabel>
                <Popover open={openDate} onOpenChange={setOpenDate}>
                  <PopoverTrigger
                    render={
                      <Button
                        variant="outline"
                        id="date"
                        className="justify-start font-normal"
                      >
                        {date ? date.toLocaleDateString() : "Selecione a data"}
                      </Button>
                    }
                  />
                  <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      defaultMonth={date}
                      captionLayout="dropdown"
                      onSelect={(date) => {
                        setDate(date);
                        setOpenDate(false);
                      }}
                      disabled={{ before: minDate }}
                      startMonth={minDate}
                    />
                  </PopoverContent>
                </Popover>
              </Field>

              <Field>
                <FieldLabel htmlFor="time">Horário</FieldLabel>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  required
                  step="1"
                  defaultValue={minTime}
                  className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </Field>
            </div>

            {/*
                // TODO: retirar duração e incluir tipo de serviço 
                // Será salvo no db o serviço com {name, color, duration, description}
                */}
            <Field>
              <FieldLabel htmlFor="duration">Duração</FieldLabel>
              <Input
                id="duration"
                name="duration"
                type="number"
                min="0"
                step="5"
                defaultValue="60"
                placeholder="60"
                required
              />
              <FieldDescription>Informe a duração em minutos.</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="description">Descrição</FieldLabel>
              <Textarea
                id="description"
                name="description"
                placeholder="Adicione observações sobre o agendamento"
                rows={4}
              />
            </Field>
          </FieldGroup>
        </DialogMain>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Cancelar</Button>} />
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
