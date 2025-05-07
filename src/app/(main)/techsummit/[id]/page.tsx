"use client";
import TechSummitContract from "@/components/dashboard/pages/tech-summit-contract";
import { useParams } from "next/navigation";
import React from "react";

const TechSummit = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <TechSummitContract contractID={Number(params.id)} />
    </div>
  );
};

export default TechSummit;
