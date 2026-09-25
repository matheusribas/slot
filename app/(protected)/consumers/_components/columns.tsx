"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { DataTableFeaturesType } from "@/components/feature/data-table/data-table-features";
import { PlusIcon } from "lucide-react";
import { formatPhone } from "@/utils/formatPhone";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ConsumersType } from "@/services/consumers/data";

const columnHelper = createColumnHelper<DataTableFeaturesType, ConsumersType>();

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Nome",
    cell({ row }) {
      const { name } = row.original;
      return <p className="truncate">{name}</p>;
    },
  }),
  columnHelper.accessor("phone", {
    header: "Telefone",
    cell({ row }) {
      const { phone } = row.original;
      if (!phone) return "--";

      return (
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href={`https://wa.me/55${phone}`}
                target="_blank"
                className="underline"
              >
                {formatPhone(phone)}
              </a>
            }
          />
          <TooltipContent>Enviar WhatsApp</TooltipContent>
        </Tooltip>
      );
    },
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell({ row }) {
      const { email } = row.original;
      return (
        <Tooltip>
          <TooltipTrigger
            render={
              <a href={`mailto:${email}`} target="_blank" className="underline">
                {email}
              </a>
            }
          />
          <TooltipContent>Enviar E-mail</TooltipContent>
        </Tooltip>
      );
    },
  }),
  columnHelper.accessor("atLastEvent", {
    header() {
      return <div className="text-center">Último agendamento</div>;
    },
    cell({ row }) {
      const { atLastEvent } = row.original;
      let content = "--";

      if (atLastEvent)
        content = format(parseISO(atLastEvent), "dd/MM/yyyy - HH:mm");

      return <p className="text-center">{content}</p>;
    },
  }),
  columnHelper.display({
    id: "id",
    header() {
      return <div className="text-center">Ações</div>;
    },
    cell: () => {
      return (
        <div className="w-full flex justify-center">
          <Button variant="outline" className="flex gap-2">
            <PlusIcon />
            Novo agendamento
          </Button>
        </div>
      );
    },
  }),
]);
