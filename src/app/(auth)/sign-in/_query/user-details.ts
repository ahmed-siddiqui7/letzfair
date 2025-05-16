import { axiosInstance } from "@/utils/axios.config";
import { useQuery } from "@tanstack/react-query";

export type UserPayload = {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  profile_image_url: string | null;
  status: string;
  roles: object;
};

export type userResponseData = {
  data: UserPayload;
};

export const userDetails = async (): Promise<userResponseData> => {
  const response = await axiosInstance().get("/api/v1/users/me");
  return response.data;
};

export const useUserDetails = () => {
  return useQuery({
    queryFn: () => userDetails(),
    queryKey: ["userDetails"],
  });
};
