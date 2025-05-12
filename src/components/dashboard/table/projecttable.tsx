import React, { useEffect, useState } from "react";
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
import { FiPlus } from "react-icons/fi";
import { getProject, useProject } from "@/mutation/get-projects";
import { TechSummitContractProps } from "../pages/tech-summit-contract";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";

const ProjectTable = ({ contractID }: TechSummitContractProps) => {
  const router = useRouter();
  const [pagination, setpagination] = useState();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState<string>("");
  const [fromDate, setFromDate] = useState<Date | undefined>(
    new Date("2025-01-06")
  );
  const [toDate, setToDate] = useState<Date | undefined>(
    new Date("2025-02-14")
  );
  type Project = {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    location: string;
    status: string;
  };

  const { data, isLoading, isError, error } = useProject({
    contractId: contractID,
    page: 1,
    limit: 20,
    end_date: "",
    search: search,
    sortBy: "",
    sortOrder: "",
    start_date: "",
    status: "",
  });
  const [projectData, setProjectData] = useState<Project[] | undefined>([]);

  console.log("search", data);

  useEffect(() => {
    if (data?.projects) {
      setProjectData(data.projects);
      setpagination(data?.pagination);
    } else {
      setProjectData([]);
    }
  }, [data]);

  return (
    <div>
      <div className="bg-white border rounded-2xl py-2 mb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-6 px-6 pt-2">
          <div className="w-1/5 relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <Input
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border
               border-gray-300 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-gray-300"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
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
            <Select>
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>All</SelectLabel>
                  <SelectItem value="Innovators Summit 2024">
                    Innovators Summit 2026
                  </SelectItem>
                  <SelectItem value="Innovators">Innovators</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <button
              className="flex items-center gap-2 bg-[#166DFB] text-white px-2.5 py-1.5 rounded cursor-pointer"
              onClick={() => {
                router.push("/create-project");
              }}
            >
              <FiPlus />
              <span>Create New Project</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto border">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-500">
              <tr>
                <th className="px-4 py-3">Project Name</th>
                <th className="px-4 py-3">Start Date</th>
                <th className="px-4 py-3">End Date</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {data?.length === 0 ? (
                <tr>
                  <td colSpan={6}>
                    <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
                      <img
                        src="/exhibitor.png"
                        alt="No contracts"
                        className="w-60 h-70 mb-4 object-cover"
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
              ) : isLoading ? (
                <tr>
                  <td colSpan={6}>
                    <div className="space-y-4">
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-5 w-full" />
                    </div>
                  </td>
                </tr>
              ) : (
                projectData?.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">{project.name}</td>
                    <td className="px-4 py-3">{project.start_date}</td>
                    <td className="px-4 py-3">{project.end_date}</td>
                    <td className="px-4 py-3">{project.location}</td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          project.status === "Draft"
                            ? "bg-gray-100 px-1.5 py-1 rounded"
                            : "bg-green-100 px-1.5 py-1 rounded text-green-400"
                        }
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        className={
                          project.status && "Complete Setup"
                            ? "border px-2 py-1.5 rounded border-orange-400 text-orange-400 w-3/4"
                            : "border px-2 py-1.5 rounded border-blue-400 text-blue-400 w-3/4"
                        }
                      >
                        Complete Setup
                      </button>
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

export default ProjectTable;
