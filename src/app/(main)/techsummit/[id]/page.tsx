"use client";

import TechSummitContract from "@/components/dashboard/pages/tech-summit-contract";
import { getCookie, setCookie } from "cookies-next";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TechSummit = () => {
  const router = useRouter();
  const params = useParams();

  const cookie = getCookie("accessToken");
  const contractId = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (!cookie) {
      router.push("/sign-in");
      return;
    }
    if (contractId) {
      setCookie("contractId", contractId);
    }
  }, [cookie, contractId]);

  if (!contractId) {
    return <div>Loading...</div>; // Prevent crash if ID is undefined
  }

  return (
    <div>
      <TechSummitContract contractID={Number(contractId)} />
    </div>
  );
};

export default TechSummit;
