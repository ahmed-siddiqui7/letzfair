import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const EnabledLanguage = () => {
  const [language, setlanguage] = useState({
    english: false,
    spanish: false,
    french: false,
  });

  console.log("language", language);

  return (
    <div className="mt-10">
      <div className="bg-gray-100 flex-col py-4 rounded-2xl">
        <div className="flex justify-between px-6">
          <p className="text-gray-600">English</p>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {language.english ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300 "
              checked={language.english}
              onCheckedChange={(checked) =>
                setlanguage((prev) => ({ ...prev, english: checked }))
              }
            />
          </div>
        </div>
        <div className="px-6 my-6">
          <Separator />
        </div>
        <div className="flex justify-between px-6">
          <p className="text-gray-600">Spanish</p>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {language.spanish ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300 "
              checked={language.spanish}
              onCheckedChange={(checked) =>
                setlanguage((prev) => ({ ...prev, spanish: checked }))
              }
            />
          </div>
        </div>
        <div className="px-6 my-6">
          <Separator />
        </div>
        <div className="flex justify-between px-6 pb-4">
          <p className="text-gray-600">French</p>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              {language.french ? "On" : "Off"}
            </label>
            <Switch
              className="cursor-pointer bg-blue-300 "
              checked={language.french}
              onCheckedChange={(checked) =>
                setlanguage((prev) => ({ ...prev, french: checked }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnabledLanguage;
