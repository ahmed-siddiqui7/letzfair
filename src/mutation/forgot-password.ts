import { axiosInstance } from "@/utils/axios.config";
import { useMutation } from "@tanstack/react-query";

export type forgotPasswordType = {
  email: string;
};

export const forgotPassword = async (payload: forgotPasswordType) => {
  const response = await axiosInstance().post(
    "/api/v1/auth/forgot-password",
    payload
  );
  return response.data;
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
    mutationKey: ["forgotpassword"],
  });
};
