"use client";

import { DataTable } from "@/components/feature/data-table";
import { columns } from "./columns";
import { useEffect, useState } from "react";
import { InputDebounce } from "@/components/feature/input-debounce";
import { getConsumers } from "@/services/consumers/controler";
import { ConsumersType } from "@/services/consumers/data";
import { useSearchParamsCustom } from "@/hooks/use-pagination";

export function TableConsumers() {
  const {
    pagination = { pageIndex: 0, pageSize: 10 },
    setPagination = () => {},
    search = "",
    setSearch = () => {},
  } = useSearchParamsCustom({
    pagination: true,
    search: true,
  });

  const [data, setData] = useState<{ count: number; data: ConsumersType[] }>({
    count: 0,
    data: [],
  });

  // TODO: mudar aqui para React Query ou SWR
  useEffect(() => {
    let isCurrentRequest = true;

    async function loadConsumers() {
      const result = await getConsumers({
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

  return (
    <div className="flex flex-col gap-4">
      <InputDebounce
        value={search}
        onValueChange={setSearch}
        placeholder="Buscar nome, telefone ou email..."
        className="max-w-lg w-full"
      />
      <DataTable
        columns={columns}
        data={data.data}
        isPagination
        isFiltering
        rowCount={data.count}
        {...{ pagination, setPagination }}
      />
    </div>
  );
}
