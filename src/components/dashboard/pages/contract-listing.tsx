"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ContractType, useContract } from "@/mutation/get-contracts";
import { Skeleton } from "@/components/ui/skeleton";

const ContractListing = () => {
  const [fromDate, setFromDate] = useState<Date | undefined>(
    new Date("2025-01-06")
  );
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date("2025-02-14")
  );

  const router = useRouter();

  const [contracts, setcontracts] = useState<ContractType | undefined>();
  const [pagination, setpagination] = useState<ContractType | undefined>();
  const [page, setPage] = useState(0);
  const [searchValue, setsearchValue] = useState<string>("");

  const { data, isLoading } = useContract({
    page,
    limit: 10,
    sortBy: "",
    sortOrder: "",
    search: searchValue,
    start_date: "",
    end_date: "",
  });
  console.log("data....", data);

  useEffect(() => {
    if (data?.contracts) {
      setcontracts(data.contracts);
    }
  }, [data]);
  useEffect(() => {
    if (data?.contracts) {
      setpagination(data.pagination);
    }
  }, [data]);

  return (
    <div className="px-4 sm:px-8 md:px-16 mt-6">
      <h1 className="font-semibold text-xl sm:text-2xl mb-4 md:text-start text-center">
        Select a Contract to Get Started
      </h1>
      {isLoading && (
        <>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </>
      )}
      <div className="bg-white border rounded-2xl py-2 mb-10">
        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6 px-6 pt-2">
          <div className="md:w-1/3 relative w-full">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <Input
              placeholder="Search"
              value={searchValue}
              onChange={(e) => {
                setsearchValue(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 border
               border-gray-300 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex md:flex-wrap md:gap-4 gap-1 justify-between">
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
            <thead className="bg-gray-100 text-gray-500 md:font-medium md:text-base text-xs">
              <tr>
                <th className="px-4 py-3">Contract Name</th>
                <th className="px-4 py-3">Start Date</th>
                <th className="px-4 py-3">End Date</th>
                <th className="px-4 py-3">No of Projects</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {contracts?.length === 0 ? (
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
                contracts?.map((contract, i) => (
                  <tr key={i} className="hover:bg-gray-50 md:text-base text-xs">
                    <td className="px-4 py-4 font-medium">{contract.name}</td>
                    <td className="px-4 py-4">{contract.start_date}</td>
                    <td className="px-4 py-4">{contract.end_date}</td>
                    <td className="px-4 py-4">{contract.projects_count}</td>
                    <td className="px-4 py-4 text-right">
                      <GoArrowRight
                        className="h-4 w-4 text-gray-500 cursor-pointer"
                        onClick={() => {
                          router.push(`/techsummit/${contract.id}`);
                        }}
                      />
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
            <select
              className="rounded-md px-2 py-1 text-sm"
              onChange={(e) => setPage(Number(e.target.value))}
            >
              {Array.from({ length: pagination?.totalPages ?? 1 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <span>
              {pagination?.page} of {pagination?.total}
            </span>
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
