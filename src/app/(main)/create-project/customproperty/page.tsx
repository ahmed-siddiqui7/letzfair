"use client";
import { useState } from "react";
import CustomPropertyTable from "./_table/custompropertytable";

type ButtonValueType = string;
const CustomProperty = () => {
  const [tabs, setTabs] = useState<string>("Attendee");

  const handleBtnTabs = (val: ButtonValueType) => {
    setTabs(val);
  };

  return (
    <div className="md:px-24 px-4">
      <div className="mt-10 mb-10">
        <h1 className="md:text-4xl font-medium text-2xl">
          Custom Property Management
        </h1>
        <p className="mt-2 text-gray-600">
          Create and manage permission groups for Users, Exhibitors
        </p>
      </div>
      <div className="mt-10 mb-8 flex space-x-8 relative">
        <button
          type="button"
          onClick={() => handleBtnTabs("Attendee")}
          className={`cursor-pointer  ${
            tabs === "Attendee"
              ? "border-b-[#166DFB] border-b-2 relative text-[#166DFB] pb-1"
              : "border-b-0 text-gray-400 pb-1"
          }`}
        >
          Attendee Property
        </button>
        <button
          type="button"
          onClick={() => handleBtnTabs("Exhibitor")}
          className={`cursor-pointer  ${
            tabs === "Exhibitor"
              ? "border-b-[#166DFB] border-b-2 relative text-[#166DFB] pb-1"
              : "border-b-0 text-gray-400 pb-1"
          }`}
        >
          Exhibitor Property
        </button>
        <button
          type="button"
          onClick={() => handleBtnTabs("Session")}
          className={`cursor-pointer  ${
            tabs === "Session"
              ? "border-b-[#166DFB] border-b-2 relative text-[#166DFB] pb-1"
              : "border-b-0 text-gray-400 pb-1"
          }`}
        >
          Session Property
        </button>
      </div>
      <div>
        <CustomPropertyTable />
      </div>
    </div>
  );
};

export default CustomProperty;
