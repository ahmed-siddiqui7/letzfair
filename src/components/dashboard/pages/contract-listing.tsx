"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import DatePickerWithLabel from "../datepicker-label";
import { GoArrowRight } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const ContractListing = () => {
  const [fromDate, setFromDate] = useState<Date | undefined>(
    new Date("2025-01-06")
  );
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date("2025-02-14")
  );
  const contracts = [
    {
      name: "FutureTech 2025 Contract",
      start: "02/20/2025",
      end: "06/30/2025",
      projects: 1,
    },
    {
      name: "AI & Automation Contract",
      start: "07/20/2025",
      end: "08/14/2025",
      projects: 3,
    },
    {
      name: "Global Health Talks Package",
      start: "12/01/2024",
      end: "01/15/2025",
      projects: 5,
    },
    {
      name: "MedConnect Conference Series",
      start: "01/15/2025",
      end: "03/10/2025",
      projects: 6,
    },
    {
      name: "FinVision 2025 Contract",
      start: "06/15/2025",
      end: "04/22/2025",
      projects: 12,
    },
    {
      name: "Global Health Talks Package",
      start: "12/01/2024",
      end: "01/15/2025",
      projects: 5,
    },
    {
      name: "MedConnect Conference Series",
      start: "01/15/2025",
      end: "03/10/2025",
      projects: 6,
    },
    {
      name: "Global Health Talks Package",
      start: "12/01/2024",
      end: "01/15/2025",
      projects: 5,
    },
  ];
  return (
    <div className="px-4 sm:px-8 md:px-16 mt-6">
      <h1 className="font-semibold text-xl sm:text-2xl mb-4">
        Select a Contract to Get Started
      </h1>
      <div className="bg-white border rounded-2xl py-2 mb-10">
        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6 px-6 pt-2">
          <div className="w-1/3 relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <Input
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border
               border-gray-300 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex flex-wrap gap-4">
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
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto border">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-3">Contract Name</th>
                <th className="px-4 py-3">Start Date</th>
                <th className="px-4 py-3">End Date</th>
                <th className="px-4 py-3">No of Projects</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {contracts.length === 0 ? (
                <tr>
                  <td colSpan={5}>
                    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
                      <img
                        src="/nocontracts.png"
                        alt="No contracts"
                        className="w-60 h-50 mb-4"
                      />
                    </div>
                  </td>
                </tr>
              ) : (
                contracts.map((contract, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{contract.name}</td>
                    <td className="px-4 py-3">{contract.start}</td>
                    <td className="px-4 py-3">{contract.end}</td>
                    <td className="px-4 py-3">{contract.projects}</td>
                    <td className="px-4 py-3 text-right">
                      <GoArrowRight className="h-4 w-4 text-gray-500 cursor-pointer" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
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

export default ContractListing;
