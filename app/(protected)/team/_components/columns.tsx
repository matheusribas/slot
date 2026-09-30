"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { DataTableFeaturesType } from "@/components/feature/data-table/data-table-features";
import { formatPhone } from "@/utils/formatPhone";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MemberType } from "@/services/members/data";
import { ButtonModalTrigger } from "./button-modal-trigger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const columnHelper = createColumnHelper<DataTableFeaturesType, MemberType>();

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "Nome",
    cell({ row }) {
      const { name } = row.original;
      return <p className="truncate max-w-2xs">{name}</p>;
    },
  }),
  columnHelper.accessor("phone", {
    header: "Telefone (WhatsApp)",
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
  columnHelper.accessor("status", {
    header: "Status",
    cell({ row }) {
      const { status } = row.original;
      const setup = {
        active: { label: "Ativo", variant: "success" },
        inactive: { label: "Inativo", variant: "secondary" },
      } as const;

      return (
        <Badge variant={setup[status].variant}>{setup[status].label}</Badge>
      );
    },
  }),
  columnHelper.accessor("services", {
    header: "Serviços",
    cell({ row }) {
      const { services } = row.original;
      const SLICE_INDEX = 2;
      const rest = services.slice(SLICE_INDEX);

      return (
        <Tooltip disabled={!rest.length}>
          <TooltipTrigger
            render={
              <div className="space-x-2">
                {services.slice(0, SLICE_INDEX).map((service) => (
                  <Badge
                    style={{
                      backgroundColor: `color-mix(in srgb, ${service.color} 5%, transparent)`,
                      color: `${service.color}`,
                    }}
                    key={service.id}
                  >
                    {service.name}
                  </Badge>
                ))}
                {rest.length ? <span>+{rest.length}</span> : null}
              </div>
            }
          />
          <TooltipContent>
            {services.map((s) => s.name).join(", ")}
          </TooltipContent>
        </Tooltip>
      );
    },
  }),
  columnHelper.accessor("businessHours", {
    header: "Dias de trabalho",
    cell({ row }) {
      const { businessHours } = row.original;
      const workingDays = businessHours.filter(({ workingDay }) => workingDay);

      return workingDays.map(({ label }) => label.slice(0, 3)).join(", ");
    },
  }),
  columnHelper.display({
    id: "id",
    header() {
      return <div className="text-center">Ações</div>;
    },
    cell: ({ row }) => {
      return (
        <div className="w-full flex justify-center space-x-2">
          {/* // TODO: criar req para mudar status */}
          <Button variant="outline" className="min-w-21.5">
            {row.original.status === "active" ? "Desativar" : "Ativar"}
          </Button>
          {/* // TODO: criar modal de edição de integrante */}
          <Button variant="outline">Editar</Button>
        </div>
      );
    },
  }),
]);
