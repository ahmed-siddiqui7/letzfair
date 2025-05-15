"use client";
import { useState } from "react";
import CustomPropertyTable from "./_table/custom-property-table";

type ButtonValueType = string | undefined;

enum PropertyType {
  attendee = "attendee",
  exhibitor_manager = "exhibitor_manager",
  session = "session",
}

const CustomProperty = () => {
  const [types, setTypes] = useState<PropertyType | undefined>(
    PropertyType.attendee
  );

  const handleBtnTabs = (val: PropertyType) => {
    setTypes(val);
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
          onClick={() => handleBtnTabs(PropertyType.attendee)}
          className={`cursor-pointer  ${
            types === PropertyType.attendee && "attendee"
              ? "border-b-[#166DFB] border-b-2 relative text-[#166DFB] pb-1"
              : "border-b-0 text-gray-400 pb-1"
          }`}
        >
          Attendee Property
        </button>
        <button
          type="button"
          onClick={() => handleBtnTabs(PropertyType.exhibitor_manager)}
          className={`cursor-pointer  ${
            types === PropertyType.exhibitor_manager && "exhibitor_manager"
              ? "border-b-[#166DFB] border-b-2 relative text-[#166DFB] pb-1"
              : "border-b-0 text-gray-400 pb-1"
          }`}
        >
          Exhibitor Property
        </button>
        <button
          type="button"
          onClick={() => handleBtnTabs(PropertyType.session)}
          className={`cursor-pointer  ${
            types === PropertyType.session && "session"
              ? "border-b-[#166DFB] border-b-2 relative text-[#166DFB] pb-1"
              : "border-b-0 text-gray-400 pb-1"
          }`}
        >
          Session Property
        </button>
      </div>
      <div>
        <CustomPropertyTable types={types} />
      </div>
    </div>
  );
};

export default CustomProperty;
