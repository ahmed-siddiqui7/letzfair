import axios from "axios";
import { getCookie } from "cookies-next";

const BASE_URL = "https://staging-api.letzfair.com";

export const axiosInstance = () => {
  const value = getCookie("accessToken");
  const tokenVal: string | undefined =
    typeof value === "string" ? value : undefined;
  console.log(tokenVal);
  return axios.create({
    headers: {
      token: tokenVal,
      "Content-Type": "application/json",
    },
    baseURL: BASE_URL,
  });
};
