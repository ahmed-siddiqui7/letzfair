import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type ContractType = {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
  search: string;
  start_date: string;
  end_date: string;
};

export const getContract = async (payload: ContractType) => {
  const response = await axiosInstance().get("/api/v1/contracts", {
    params: payload,
  });
  return response.data;
};

export const useContract = (payload: ContractType) => {
  return useQuery({
    queryFn: () => getContract(payload),
    queryKey: ["getContract", payload],
  });
};
