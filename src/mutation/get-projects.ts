import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type ProjectType = {
  contractId: number;
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
  search: string;
  status: string;
  start_date: string | undefined;
  end_date: string | undefined;
};

export const getProject = async (payload: ProjectType) => {
  const contractId = payload.contractId;
  const response = await axiosInstance().get(
    `/api/v1/contracts/${contractId}/projects`
  );
  return response.data;
};

export const useProject = (payload: ProjectType) => {
  return useQuery({
    queryFn: () => getProject(payload),
    queryKey: ["getProject", payload],
  });
};
