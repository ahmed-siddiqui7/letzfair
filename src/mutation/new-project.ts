import { axiosInstance } from "@/utils/axios.config";
import { useMutation } from "@tanstack/react-query";

export type projectType = {
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  banner_image_url: string | File;
};

const getID = localStorage.getItem("contractId");
console.log(getID);

export const NewProject = async (payload: projectType) => {
  const response = await axiosInstance().post(
    `/api/v1/contracts/${getID}/projects`,
    payload
  );
  return response.data;
};

export const useNewProject = () => {
  return useMutation({
    mutationFn: NewProject,
    mutationKey: ["NewProject"],
  });
};
