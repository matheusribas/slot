import { DataTable } from "@/components/feature/data-table";
import { columns } from "./columns";
import { MemberType } from "@/services/members/data";
import { Dispatch, SetStateAction } from "react";

interface TableMembersProps {
  data: {
    count: number;
    data: MemberType[];
  };
  pagination: {
    pageIndex: number;
    pageSize: number;
  };
  setPagination: Dispatch<
    SetStateAction<{
      pageIndex: number;
      pageSize: number;
    }>
  >;
}

export function TableMembers({
  data,
  pagination,
  setPagination,
}: TableMembersProps) {
  return (
    <DataTable
      columns={columns}
      data={data.data}
      isPagination
      isFiltering
      rowCount={data.count}
      {...{ pagination, setPagination }}
    />
  );
}
