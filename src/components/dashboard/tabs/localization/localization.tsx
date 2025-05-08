import React, { useState } from "react";
import EnabledLanguage from "./enabledlanguage";
import StringTranslatorTable from "./stringtranslatortable";

const Localization = () => {
  const [activeTab, setactiveTab] = useState<
    "enabledlanguage" | "stringtranslation"
  >("enabledlanguage");

  const handleTab = (val: any) => {
    setactiveTab(val);
  };

  const contract = [
    {
      name: "John",
      createdOn: "12-9-2025",
      address: "Checking Address",
      noOfManager: 2,
    },
  ];

  return (
    <div>
      {/* TABS BUTTON */}
      <div className="flex gap-4">
        <button
          className={` 
             ${
               activeTab === "enabledlanguage"
                 ? "cursor-pointer border-blue-400 text-blue-400 bg-blue-100 rounded-4xl px-4 py-2 border"
                 : " text-gray-600 cursor-pointer  rounded-4xl px-4 py-2 border"
             }`}
          onClick={() => handleTab("enabledlanguage")}
        >
          Enabled language
        </button>
        <button
          className={` 
            ${
              activeTab === "stringtranslation"
                ? "cursor-pointer border-blue-400 text-blue-400 bg-blue-100 rounded-4xl px-4 py-2 border"
                : " text-gray-600 cursor-pointer  rounded-4xl px-4 py-2 border"
            }`}
          onClick={() => handleTab("stringtranslation")}
        >
          String Translation
        </button>
      </div>
      {/* TABS */}
      {activeTab === "enabledlanguage" && <EnabledLanguage />}
      {activeTab === "stringtranslation" && <StringTranslatorTable />}
    </div>
  );
};

export default Localization;
