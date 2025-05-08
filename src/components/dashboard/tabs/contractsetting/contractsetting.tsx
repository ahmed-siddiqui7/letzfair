import React, { useState } from "react";
import { ReactNode } from "react";
import GeneralSetting from "./generalsetting";
import ContractFeatures from "./contractfeatures";

const ContractSetting = () => {
  const [tabValue, settabValue] = useState<
    "generalsetting" | "contactfeatures"
  >("generalsetting");
  const handleTab = (val: any) => {
    settabValue(val);
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          className={` 
             ${
               tabValue === "generalsetting"
                 ? "cursor-pointer border-blue-400 text-blue-400 bg-blue-100 rounded-4xl px-6 py-2 border"
                 : " text-gray-600 cursor-pointer  rounded-4xl px-6 py-2 border"
             }`}
          onClick={() => handleTab("generalsetting")}
        >
          General Setting
        </button>
        <button
          className={` 
            ${
              tabValue === "contactfeatures"
                ? "cursor-pointer border-blue-400 text-blue-400 bg-blue-100 rounded-4xl px-6 py-2 border"
                : " text-gray-600 cursor-pointer  rounded-4xl px-6 py-2 border"
            }`}
          onClick={() => handleTab("contactfeatures")}
        >
          Contact Features
        </button>
      </div>
      {tabValue === "generalsetting" && <GeneralSetting />}
      {tabValue === "contactfeatures" && <ContractFeatures />}
    </div>
  );
};

export default ContractSetting;
