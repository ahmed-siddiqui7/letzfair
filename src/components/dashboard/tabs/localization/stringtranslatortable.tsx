import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import DatePickerWithLabel from "../../datepicker-label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import EditStringModal from "../../edit-string-modal";
import ImportStringModal from "../../import-string-modal";

const StringTranslatorTable = () => {
  const stringdata = [
    {
      id: 1,
      name: "John",
      createdOn: "12-9-2025",
      address: "Checking Address",
      noOfManager: 2,
    },
    {
      id: 2,
      name: "John",
      createdOn: "12-9-2025",
      address: "Checking Address",
      noOfManager: 2,
    },
    {
      id: 3,
      name: "John",
      createdOn: "12-9-2025",
      address: "Checking Address",
      noOfManager: 2,
    },
    {
      id: 4,
      name: "John",
      createdOn: "12-9-2025",
      address: "Checking Address",
      noOfManager: 2,
    },
  ];

  return (
    <div className="mt-10">
      <div className="bg-white border rounded-2xl py-2 mb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6 px-6 pt-2">
          <div className="md:w-1/3 w-full relative">
            <CiSearch className="absolute left-4  text-gray-400 text-2xl top-1.5" />
            <Input
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border
               border-gray-300 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex flex-wrap gap-4 md:justify-normal justify-center">
            <ImportStringModal />

            <button className="border px-4 py-2 rounded-2xl flex items-center gap-1.5 cursor-pointer">
              <span>
                <img src="/exporticon.png" alt="" />
              </span>
              <span>Export</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-500">
              <tr>
                <th className="px-4 py-3">String Key</th>
                <th className="px-4 py-3">English (EN)</th>
                <th className="px-4 py-3">French (FR)</th>
                <th className="px-4 py-3 text-center">Spanish (ES)</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {stringdata.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
                      <img
                        src="/exhibitor.png"
                        alt="No contracts"
                        className="w-90 h-70 mb-4 object-cover"
                      />
                      <h1 className="text-xl font-semibold">
                        No Users Invited Yet
                      </h1>
                      <p className="text-wrap">
                        This project doesn’t have any users invited yet. Start
                        by adding users to collaborate and engage in the
                        project.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                stringdata.map((data, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium">{data.name}</td>
                    <td className="px-4 py-4">{data.createdOn}</td>
                    <td className="px-4 py-4">{data.address}</td>
                    <td className="px-4 py-4 text-center">
                      {data.noOfManager}
                    </td>
                    <td className="px-4 py-4 text-center">
                      {/* <button>
                        <FaRegEdit className="rounded size-5 cursor-pointer" />
                      </button> */}

                      <EditStringModal />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end px-2 py-4 gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select className=" rounded-md px-2 py-1 text-sm">
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <span>1–5 of 10</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringTranslatorTable;
