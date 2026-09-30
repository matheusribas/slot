import { members } from "./data";

interface GetMembersParams {
  search: string;
  page: number;
  pageSize: number;
}

export const getMembers = async ({
  search,
  page,
  pageSize,
}: GetMembersParams) => {
  const normalizedSearch = search.trim().toLowerCase();
  const phoneSearch = search.replace(/\D/g, "");
  const filteredMembers = members.filter((member) => {
    return (
      member.name.toLowerCase().includes(normalizedSearch) ||
      (phoneSearch.length > 0 && String(member.phone).includes(phoneSearch))
    );
  });

  const pageIndex = page - 1;
  const offset = pageSize * pageIndex;
  const data = filteredMembers.slice(offset, offset + pageSize);

  return {
    count: filteredMembers.length,
    page,
    data,
  };
};
