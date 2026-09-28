"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
} from "react";

interface PaginationType {
  pageIndex: number;
  pageSize: number;
}

interface UseSearchParamsType {
  pagination?: boolean;
  search?: boolean;
}
interface ValuesType {
  pagination?: {
    pageIndex: number;
    pageSize: number;
  };
  setPagination?: Dispatch<SetStateAction<PaginationType>>;
  setPage?: (page: number) => void;
  setPageSize?: (pageSize: number) => void;
  search?: string;
  setSearch?: (search: string) => void;
}

const PAGE_SIZE_DEFAULT = 10;

export function useSearchParamsCustom({
  pagination,
  search,
}: UseSearchParamsType) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryString = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([name, value]) =>
        params.set(name, value),
      );

      const queryString = params.toString();
      router.replace(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  const setPage = useCallback(
    (page: number) => {
      updateQueryString({ page: String(page) });
    },
    [updateQueryString],
  );
  const setPageSize = useCallback(
    (pageSize: number) => {
      updateQueryString({ pageSize: String(pageSize) });
    },
    [updateQueryString],
  );
  const setPagination = useCallback<Dispatch<SetStateAction<PaginationType>>>(
    (nextPagination) => {
      const currentPagination = {
        pageIndex: Number(searchParams.get("page") || 1) - 1,
        pageSize: Number(searchParams.get("pageSize") || PAGE_SIZE_DEFAULT),
      };
      const pagination =
        typeof nextPagination === "function"
          ? nextPagination(currentPagination)
          : nextPagination;

      updateQueryString({
        page: String(pagination.pageIndex + 1),
        pageSize: String(pagination.pageSize),
      });
    },
    [searchParams, updateQueryString],
  );

  const setSearch = useCallback(
    (search: string) => {
      updateQueryString({
        search,
        ...(pagination ? { page: "1" } : {}),
      });
    },
    [pagination, updateQueryString],
  );

  const formatValues = useMemo(() => {
    const values: ValuesType = {};
    if (pagination) {
      values.pagination = {
        pageIndex: Number(searchParams.get("page") || 1) - 1,
        pageSize: Number(searchParams.get("pageSize") || PAGE_SIZE_DEFAULT),
      };
      values.setPagination = setPagination;
      values.setPage = setPage;
      values.setPageSize = setPageSize;
    }
    if (search) {
      values.search = searchParams.get("search") || "";
      values.setSearch = setSearch;
    }

    return values;
  }, [
    searchParams,
    pagination,
    setPagination,
    setPage,
    setPageSize,
    search,
    setSearch,
  ]);

  useEffect(() => {
    const defaults: Record<string, string> = {};

    if (pagination) {
      if (!searchParams.has("page")) defaults.page = "1";
      if (!searchParams.has("pageSize")) {
        defaults.pageSize = String(PAGE_SIZE_DEFAULT);
      }
    }
    if (search && !searchParams.has("search")) {
      defaults.search = "";
    }

    if (Object.keys(defaults).length > 0) updateQueryString(defaults);
  }, [pagination, search, searchParams, updateQueryString]);

  return formatValues;
}
