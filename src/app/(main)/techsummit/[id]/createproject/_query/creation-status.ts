import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type CreationPayloadType = {
  contractId: number | undefined;
  projectId: number | undefined;
};

export const creationStatus = async (payload: CreationPayloadType) => {
  const result = await axiosInstance().get(
    `/api/v1/contracts/${payload.contractId}/projects/${payload.projectId}/creation-status`
  );
  return result.data;
};

export const useCreationStatus = (payload: CreationPayloadType) => {
  return useQuery({
    queryFn: () => creationStatus(payload),
    queryKey: ["creattionStatus", payload.contractId, payload.projectId],
    enabled: !!payload.contractId && !!payload.projectId,
  });
};
