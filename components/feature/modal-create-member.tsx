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
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useBoundStore } from "@/stores";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

const weekdays = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];
export function ModalCreateMember() {
  const isOpen = useBoundStore((state) => state.isOpen);
  const modal = useBoundStore((state) => state.modal);
  const closeModal = useBoundStore((state) => state.closeModal);
  const openModal = isOpen && modal === "create-member";

  const handleOpenChange = (open: boolean) => {
    if (!open) closeModal("create-member");
  };

  return (
    <Dialog open={openModal} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Novo integrante</DialogTitle>
          <DialogDescription>
            Crie um novo integrante da equipe preenchendo os campos
          </DialogDescription>
        </DialogHeader>
        <DialogMain>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Nome</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Fulano da Silva"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Telefone (WhatsApp)</FieldLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="(00) 00000-0000"
                maxLength={15}
                required
              />
            </Field>

            <Field>
              <FieldLabel>Serviços</FieldLabel>
              <Select>
                <SelectTrigger className="h-8 w-[70px]">
                  <SelectValue placeholder="Corte de cabelo" />
                </SelectTrigger>
                <SelectContent side="bottom">
                  {/* // TODO: trazer serviços */}
                  {["Corte de cabelo", "Corte de barba", "Sobrancelha"].map(
                    (service) => (
                      <SelectItem key={service} value={`${service}`}>
                        {service}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
              <FieldDescription>
                Selecione quais serviços esse integrante pode realizar
              </FieldDescription>
            </Field>

            <div className="flex items-center gap-4">
              <Field>
                <FieldLabel htmlFor="start-domingo">
                  Horário de expediente
                </FieldLabel>
                <FieldDescription>
                  Em dias de folga, desmarque a caixa
                </FieldDescription>
                {weekdays.map((day, index) => (
                  <div
                    className="flex flex-col @min-xs:flex-row gap-4"
                    key={day}
                  >
                    <div className="flex items-center gap-4">
                      <Checkbox defaultChecked />
                      <p className="min-w-16 capitalize">{day}</p>
                    </div>
                    <div className="flex flex-1 min-w-0 items-center gap-4">
                      <Input
                        id={`start-${day}`}
                        name={`start-${day}`}
                        type="time"
                        required
                        step="1"
                        defaultValue="09:00:00"
                        className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                      />
                      <p>até</p>
                      <Input
                        id={`end-${day}`}
                        name={`end-${day}`}
                        type="time"
                        required
                        step="1"
                        defaultValue="18:00:00"
                        className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                      />
                    </div>
                    <Separator
                      orientation="horizontal"
                      className={cn(
                        "hidden @max-xs:block",
                        index === weekdays.length - 1 ? "@max-xs:hidden" : "",
                      )}
                    />
                  </div>
                ))}
              </Field>
            </div>
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
