import { axiosInstance } from "@/utils/axios.config";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

export enum fieldType {
  link = "link",
  short_text = "short_text",
  long_text = "long_text",
  number = "number",
  gallery = "gallery",
  image = "image",
  file = "file",
}

export enum visibility {
  public = "public",
  private = "private",
  hidden = "hidden",
}

export enum type {
  attendee = "attendee",
  exhibitor_manager = "exhibitor_manager",
  session = "session",
}

export type CustomProjectType = {
  label: string;
  placeholder: string;
  fieldType: fieldType;
  visibility: visibility;
  type: type;
};

const contractId = getCookie("contractId");

export const customPropert = async (payload: CustomProjectType) => {
  const result = await axiosInstance().post(
    `/api/v1/contracts/${contractId}/custom-properties`,
    payload
  );
  return result.data;
};

export const useCustomProject = () => {
  return useMutation({
    mutationFn: customPropert,
    mutationKey: ["customProject"],
  });
};
