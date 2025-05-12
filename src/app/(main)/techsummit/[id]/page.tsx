"use client";
import TechSummitContract from "@/components/dashboard/pages/tech-summit-contract";
import { getCookie } from "cookies-next";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TechSummit = () => {
  const router = useRouter();
  const cookie = getCookie("accessToken");
  console.log(cookie);
  useEffect(() => {
    if (!cookie) {
      router.push("/sign-in");
    }
  }, []);
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <TechSummitContract contractID={Number(params.id)} />
    </div>
  );
};

export default TechSummit;
