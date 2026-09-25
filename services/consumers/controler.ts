import { consumers } from "./data";

interface GetConsumersParams {
  search: string;
  page: number;
  pageSize: number;
}

export const getConsumers = async ({
  search,
  page,
  pageSize,
}: GetConsumersParams) => {
  const normalizedSearch = search.trim().toLowerCase();
  const phoneSearch = search.replace(/\D/g, "");
  const filteredConsumers = consumers.filter((consumer) => {
    return (
      consumer.name.toLowerCase().includes(normalizedSearch) ||
      consumer.email.toLowerCase().includes(normalizedSearch) ||
      (phoneSearch.length > 0 && String(consumer.phone).includes(phoneSearch))
    );
  });

  const pageIndex = page - 1;
  const offset = pageSize * pageIndex;
  const data = filteredConsumers.slice(offset, offset + pageSize);

  return {
    count: filteredConsumers.length,
    page,
    data,
  };
};
