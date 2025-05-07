import axios from "axios";
import { getCookie } from "cookies-next";

const BASE_URL = "https://staging-api.letzfair.com";

export const axiosInstance = () => {
  const value = getCookie("accessToken");
  console.log("axios instance ", value);

  const tokenVal: string | undefined =
    typeof value === "string" ? value : undefined;
  return axios.create({
    headers: {
      Authorization: `Bearer ${tokenVal}`,
      "Content-Type": "application/json",
    },
    baseURL: BASE_URL,
  });
};
