import { useUserContext } from "@/context/user";
import { axiosInstance } from "@/utils/axios.config";
import { useMutation } from "@tanstack/react-query";

export type SignIntype = {
  email: string;
  password: string;
};

export const signIn = async (payload: SignIntype) => {
  const response = await axiosInstance().post("/api/v1/auth/login", payload);
  console.log("Sign In", response);
  return response.data;
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
    mutationKey: ["signIn"],
  });
};
