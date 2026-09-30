"use client";

import { useEffect, useState } from "react";
import { AlignJustify, Grid2x2Icon } from "lucide-react";
import { InputDebounce } from "@/components/feature/input-debounce";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSearchParamsCustom } from "@/hooks/use-pagination";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GridMembers } from "./grid-members";
import { TableMembers } from "./table-members";
import { MemberType } from "@/services/members/data";
import { getMembers } from "@/services/members/controler";

type ViewType = "grid" | "table";

const initialView = "table";

export function ContentMembers() {
  const {
    pagination = { pageIndex: 0, pageSize: 10 },
    setPagination = () => {},
    search = "",
    setSearch = () => {},
  } = useSearchParamsCustom({
    pagination: true,
    search: true,
  });
  const { getLocalStorage, setLocalStorage } = useLocalStorage({
    key: "view-team",
    initialValue: initialView,
  });
  const [view, setView] = useState<ViewType>(initialView);
  const [data, setData] = useState<{ count: number; data: MemberType[] }>({
    count: 0,
    data: [],
  });

  // TODO: mudar aqui para React Query ou SWR
  useEffect(() => {
    let isCurrentRequest = true;

    async function loadConsumers() {
      const result = await getMembers({
        page: pagination.pageIndex + 1,
        pageSize: pagination.pageSize,
        search,
      });

      if (isCurrentRequest) setData(result);
    }

    void loadConsumers();

    return () => {
      isCurrentRequest = false;
    };
  }, [pagination.pageIndex, pagination.pageSize, search]);

  useEffect(() => {
    setView(getLocalStorage() as ViewType);
  }, [getLocalStorage]);

  const handleChangeView = (view: ViewType) => {
    setLocalStorage(view);
    setView(view);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <InputDebounce
          value={search}
          onValueChange={setSearch}
          placeholder="Buscar nome ou telefone..."
          className="max-w-lg w-full"
        />

        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="secondary"
                onClick={() => {
                  handleChangeView(view !== "grid" ? "grid" : "table");
                }}
              >
                {view === "grid" ? <AlignJustify /> : <Grid2x2Icon />}
              </Button>
            }
          />
          <TooltipContent>
            Visualização em {view === "grid" ? "tabela" : "blocos"}
          </TooltipContent>
        </Tooltip>
      </div>

      {view === "table" && (
        <TableMembers data={data} {...{ pagination, setPagination }} />
      )}
      {view === "grid" && <GridMembers />}
    </div>
  );
}
