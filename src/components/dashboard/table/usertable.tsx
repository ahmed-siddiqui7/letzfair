import React, { useState } from "react";
import { Button } from "../../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GoArrowRight } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import DatePickerWithLabel from "../datepicker-label";
import { CiSearch } from "react-icons/ci";
import { Input } from "../../ui/input";
import { Checkbox } from "@/components/ui/checkbox";

type Contract = {
  name: string;
  email: string;
  joinDate: string;
  phoneNumber: number;
  role: string;
  img: string;
};

interface UserTableProps {
  contracts: Contract[];
}

const UserTable = ({ contracts }: UserTableProps) => {
  const [fromDate, setFromDate] = useState<Date | undefined>(
    new Date("2025-01-06")
  );
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date("2025-02-14")
  );

  return (
    <div>
      <div className="bg-white border rounded-2xl py-2 mb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6 px-6 pt-2">
          <div className="md:w-1/5 relative w-full">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <Input
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border
               border-gray-300 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex flex-wrap gap-4 md:justify-normal justify-between">
            <DatePickerWithLabel
              label="From"
              date={fromDate}
              onChange={setFromDate}
            />
            <DatePickerWithLabel
              label="To"
              date={toDate}
              onChange={setToDate}
            />
            <Select>
              <SelectTrigger className="md:w-auto w-full">
                <SelectValue placeholder="Select Innovators"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tech Innovators Summit 2024</SelectLabel>
                  <SelectItem value="Innovators Summit 2024">
                    Innovators Summit 2026
                  </SelectItem>
                  <SelectItem value="Innovators">Innovators</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto border">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Joined Date</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {contracts?.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
                      <img
                        src="/nouser.png"
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
                contracts?.map((contract, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium flex items-center gap-2">
                      <span>
                        <Checkbox />
                      </span>
                      <span>
                        <img src={contract.img} alt="" />
                      </span>
                      <span>{contract.name}</span>
                    </td>
                    <td className="px-4 py-3">{contract.email}</td>
                    <td className="px-4 py-3">{contract.joinDate}</td>
                    <td className="px-4 py-3">{contract.phoneNumber}</td>
                    <td className="px-4 py-3">
                      <span className="bg-[#DBE5FC] text-blue-500 px-2 py-1 rounded">
                        {contract.role}
                      </span>
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

export default UserTable;
