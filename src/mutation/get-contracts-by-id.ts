import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type GetContractTypeId = {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
  contractId: number;
};

export const getContractById = async (payload: GetContractTypeId) => {
  const response = await axiosInstance().get(
    `/api/v1/contracts/${1}/contract-features`,
    {
      params: payload,
    }
  );
  return response.data;
};

export const useContractById = (payload: GetContractTypeId) => {
  return useQuery({
    queryFn: () => getContractById(payload),
    queryKey: ["getContractById", payload],
  });
};
