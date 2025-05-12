"use client";

import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const ProjectSetting = () => {
  const [checkedList, setcheckedList] = useState({
    projectvisibility: false,
  });

  return (
    <div className="px-4 sm:px-10 lg:px-32">
      <div className="mt-10">
        <h1 className="text-3xl font-medium">Project Settings</h1>
        <p className="mt-2">
          Configure project visibility, access rules, and additional settings to
          control how your project appears and functions.
        </p>
      </div>
      <h2 className="mt-8 font-medium text-xl">Project Visibility Settings</h2>
      <div className="flex justify-between bg-gray-100 rounded-xl px-10 py-7 mt-6">
        <div>
          <h3 className="font-medium">Project visibility</h3>
          <p>
            Choose whether your project is visible to everyone or restricted to
            a specific audience
          </p>
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="" className="text-xs">
            {checkedList.projectvisibility ? "Visible" : "Hide"}
          </label>
          <Switch
            className="cursor-pointer bg-blue-300"
            checked={checkedList.projectvisibility}
            onCheckedChange={(checked) =>
              setcheckedList((prev) => ({
                ...prev,
                projectvisibility: checked,
              }))
            }
          />
        </div>
      </div>
      <h2 className="mt-8 font-medium text-xl">Project Access Rule</h2>
      <div className=" bg-gray-100 rounded-xl px-8 py-7 mt-6 mb-10">
        <div className="flex gap-4">
          <div className="mt-1">
            <input
              type="radio"
              className="w-5 h-6 text-blue-600 
            bg-gray-100 border-gray-300
             "
            />
          </div>
          <div>
            <h3 className="font-medium">Free Access</h3>
            <p>Anyone can join without restrictions.</p>
          </div>
        </div>
        <div className="my-5">
          <Separator />
        </div>
        <div className="flex gap-4">
          <div className="mt-1">
            <input
              type="radio"
              className="w-5 h-6 text-blue-600 
            bg-gray-100 border-gray-300
             "
            />
          </div>
          <div>
            <h3 className="font-medium">Free Access</h3>
            <p>Anyone can join without restrictions.</p>
          </div>
        </div>
        <div className="my-5">
          <Separator />
        </div>
        <div className="flex gap-4">
          <div className="mt-1">
            <input
              type="radio"
              className="w-5 h-6 text-blue-600 
            bg-gray-100 border-gray-300
             "
            />
          </div>
          <div>
            <h3 className="font-medium">Free Access</h3>
            <p>Anyone can join without restrictions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSetting;
