"use client";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CreateProject = () => {
  const router = useRouter();

  type Tabs = {
    basicprojectinformation: boolean;
    projectsetting: boolean;
    createcustomproperty: boolean;
    createtaxonomies: boolean;
    chooseregistration: boolean;
    addpermission: boolean;
  };
  const [tabs, settabs] = useState<Tabs>({
    basicprojectinformation: false,
    projectsetting: false,
    createcustomproperty: false,
    createtaxonomies: false,
    chooseregistration: false,
    addpermission: false,
  });

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="mt-8 sm:mt-10 md:mt-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
          Create Project
        </h1>
      </div>

      <div className="flex-col border border-gray-200 rounded-2xl mt-6 sm:mt-8 md:mt-10">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-6">
          <FaCircleCheck
            className={`text-2xl ${
              tabs.basicprojectinformation ? "text-blue-400" : "text-gray-400"
            }`}
          />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl">Basic Project Information</h2>
            <p className="text-sm sm:text-base text-[#666566]">
              Start by filling in the essential details about your project
            </p>
          </div>
          <button
            className="w-full md:w-auto border-blue-500 px-4 py-2 border rounded text-blue-500 cursor-pointer"
            onClick={() => {
              settabs((prev) => ({
                ...prev,
                basicprojectinformation: true,
              }));
              localStorage.setItem("projectTab", JSON.stringify(tabs));
              router.push("/create-project/newproject");
            }}
          >
            Create
          </button>
        </div>
        <Separator />

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-6">
          <FaCircleCheck className="text-2xl text-gray-400" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl">Project Setting</h2>
            <p className="text-sm sm:text-base text-[#666566]">
              Configure project visibility, access rules, and additional
              settings.
            </p>
          </div>
          <button
            onClick={() => {
              router.push("/create-project/projectsetting");
            }}
            className="cursor-pointer w-full md:w-auto border-blue-500 px-4 py-2 border rounded text-blue-500"
          >
            Add Setting
          </button>
        </div>
        <Separator />

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-6">
          <FaCircleCheck className="text-2xl text-gray-400" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl">
              Create Custom Property (optional)
            </h2>
            <p className="text-sm sm:text-base text-[#666566]">
              Create custom properties to collect specific details
            </p>
          </div>
          <button className="cursor-pointer w-full md:w-auto border-blue-500 px-4 py-2 border rounded text-blue-500">
            Create Property
          </button>
        </div>
        <Separator />

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-6">
          <FaCircleCheck className="text-2xl text-gray-400" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl">Create Taxonomies (optional)</h2>
            <p className="text-sm sm:text-base text-[#666566]">
              Create custom properties to collect specific details
            </p>
          </div>
          <button className="cursor-pointer w-full md:w-auto border-blue-500 px-4 py-2 border rounded text-blue-500">
            Create Property
          </button>
        </div>
        <Separator />

        {/* Section 5 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-6">
          <FaCircleCheck className="text-2xl text-gray-400" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl">Choose Registration Forms</h2>
            <p className="text-sm sm:text-base text-[#666566]">
              Select the type of registration forms you need for this project
            </p>
          </div>
          <button className="cursor-pointer w-full md:w-auto border-blue-500 px-4 py-2 border rounded text-blue-500">
            Select Type
          </button>
        </div>
        <Separator />

        {/* Section 6 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 py-6">
          <FaCircleCheck className="text-2xl text-gray-400" />
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl">Add Permissions</h2>
            <p className="text-sm sm:text-base text-[#666566]">
              Manage Access and Roles for attendee, exhibitor and guest users
            </p>
          </div>
          <button className="cursor-pointer w-full md:w-auto border-blue-500 px-4 py-2 border rounded text-blue-500">
            Add Permission
          </button>
        </div>
      </div>

      <div className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
          <button className="cursor-pointer border border-blue-400 px-4 py-2 rounded text-blue-400 w-full sm:w-auto">
            Cancel
          </button>
          <button className="cursor-pointer border border-blue-400 px-4 py-2 rounded text-blue-400 w-full sm:w-auto">
            Save And Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
