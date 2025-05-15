import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type GetPropertyType = {
  contractId: number | undefined;
  projectId: number | undefined;
};

export const getProperty = async (payload: GetPropertyType) => {
  const result = await axiosInstance().get(
    `/api/v1/contracts/${payload.contractId}/projects/${payload.projectId}/custom-properties`
  );
  return result.data;
};

export const useGetProperty = (payload: GetPropertyType) => {
  return useQuery({
    queryFn: () => getProperty(payload),
    queryKey: ["getProperty", payload],
  });
};
