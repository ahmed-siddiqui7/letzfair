import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React from "react";

const EnabledLanguage = () => {
  return (
    <div className="mt-10">
      <div className="bg-gray-100 flex-col py-4 rounded-2xl">
        <div className="flex justify-between px-6">
          <p className="text-gray-600">English</p>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              On
            </label>
            <Switch className="cursor-pointer bg-blue-300 " />
          </div>
        </div>
        <div className="px-6 my-6">
          <Separator />
        </div>
        <div className="flex justify-between px-6">
          <p className="text-gray-600">Spanish</p>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              On
            </label>
            <Switch className="cursor-pointer bg-blue-300 " />
          </div>
        </div>
        <div className="px-6 my-6">
          <Separator />
        </div>
        <div className="flex justify-between px-6 pb-4">
          <p className="text-gray-600">French</p>
          <div className="flex items-center gap-1">
            <label htmlFor="" className="text-xs">
              On
            </label>
            <Switch className="cursor-pointer bg-blue-300 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnabledLanguage;
