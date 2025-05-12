import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type ContractItem = {
  id: string;
  name: string;
  start_date: string;
  end_date: string;
  projects_count: number;
};

export type ContractQueryPayload = {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
  search: string;
  start_date: string;
  end_date: string;
};

export type ContractQueryResult = {
  contracts: ContractItem[];
  pagination: {
    page: number;
    totalPages: number;
    total: number;
  };
};

export const getContract = async (
  payload: ContractQueryPayload
): Promise<ContractQueryResult> => {
  const response = await axiosInstance().get("/api/v1/contracts", {
    params: payload,
  });
  return response.data;
};

export const useContract = (payload: ContractQueryPayload) => {
  return useQuery<ContractQueryResult>({
    queryFn: () => getContract(payload),
    queryKey: ["getContract", payload],
  });
};
