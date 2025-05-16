"use client";

import ContractListing from "@/components/dashboard/pages/contract-listing";
import { UserContext, useUserContext } from "@/context/user";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const Main = () => {
  const router = useRouter();
  const cookie = getCookie("accessToken");
  console.log(cookie);

  useEffect(() => {
    if (!cookie) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <div>
      <ContractListing />
    </div>
  );
};

export default Main;
