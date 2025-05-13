import { axiosInstance } from "@/utils/axios.config";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export type CreateProjectType = {};

export const createProject = async (payload: CreateProjectType) => {
  const getID = getCookie("contractId");
  const res = await axiosInstance().post(
    `/api/v1/contracts/${getID}/projects/settings`,
    payload
  );
  return res.data;
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: createProject,
    mutationKey: ["CreateProject"],
  });
};
