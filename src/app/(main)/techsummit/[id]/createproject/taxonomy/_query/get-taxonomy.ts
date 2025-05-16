import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

type GetTaxonomyType = {
  contractId: number | undefined;
  projectId: number | undefined;
};

export const getTaxonomy = async (payload: GetTaxonomyType) => {
  const { contractId, projectId } = payload;
  const response = await axiosInstance().get(
    `/api/v1/contracts/${contractId}/projects/${projectId}/taxonomies`
  );
  return response.data;
};

export const useGetTaxonomy = (payload: GetTaxonomyType) => {
  return useQuery({
    queryFn: () => getTaxonomy(payload),
    queryKey: ["getTaxonomy"],
  });
};
