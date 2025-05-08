"use client";
import React, { useEffect, useState } from "react";
import BackButton from "../back-button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserTable from "../table/usertable";
import ExhibitorTable from "../table/exhibitortable";
import {
  GetContractTypeId,
  useContractById,
} from "@/mutation/get-contracts-by-id";
import ProjectTable from "../table/projecttable";
import ContractSetting from "../tabs/contractsetting/contractsetting";
import Localization from "../tabs/localization/localization";
import { Separator } from "@/components/ui/separator";

interface TechSummitContractProps {
  contractID: number;
}
const TechSummitContract = ({ contractID }: TechSummitContractProps) => {
  const pathname = usePathname();
  console.log("TechSummitContract", contractID);

  const userContract = [
    {
      name: "NeuroTech",
      email: "emilyzhang@example.com",
      joinDate: "06/18/2025",
      phoneNumber: 4157891234,
      role: "Speaker",
      img: "/avatar1.png",
    },
    {
      name: "Quantum Future",
      email: "michaelroberts@example.com",
      joinDate: "05/12/2025",
      phoneNumber: 2134567890,
      role: "Attendee",
      img: "/avatar2.png",
    },
    {
      name: "Digital Health",
      email: "sarawilliams@example.com",
      joinDate: "04/22/2025",
      phoneNumber: 3126789012,
      role: "Organizer",
      img: "/avatar3.png",
    },
    {
      name: "BioMed Deal",
      email: "danielkim@example.com",
      joinDate: "03/15/2025",
      phoneNumber: 6467890123,
      role: "Speaker",
      img: "/avatar1.png",
    },
  ];

  const exhibitorContract = [
    {
      name: "NeuroTech Inc.",
      createdOn: "03/10/2025",
      address: "123 Innovation Drive, San Francisco, CA",
      noOfManager: 2,
    },
    {
      name: "Quantum Systems",
      createdOn: "01/22/2025",
      address: "456 Quantum Blvd, Austin, TX",
      noOfManager: 1,
    },
    {
      name: "Digital Health Corp",
      createdOn: "02/18/2025",
      address: "789 Wellness Way, Seattle, WA",
      noOfManager: 5,
    },
    {
      name: "BioMed Solutions",
      createdOn: "04/01/2025",
      address: "321 Medical Park, Boston, MA",
      noOfManager: 5,
    },
    {
      name: "GreenTech Expo",
      createdOn: "03/28/2025",
      address: "654 Eco Lane, Denver, CO",
      noOfManager: 6,
    },
  ];

  const projectContract = [
    {
      projectname: "GlobalTech Summit 2025",
      startdate: "02/02/25",
      enddate: "24/02/25",
      location: "Hall A, Tech Expo Center",
      status: "Draft",
      action: "Complete Setup",
    },
    {
      projectname: "NextGen AI Expo",
      startdate: "11/03/25",
      enddate: "25/03/25",
      location: "Hall A, Innovation Hub",
      status: "Published",
      action: "View Details",
    },
    {
      projectname: "MedNext Global 2025",
      startdate: "03/01/25",
      enddate: "20/02/25",
      location: "Hall R, Tech Discovery Center",
      status: "Draft",
      action: "Complete Setup",
    },
    {
      projectname: "NutriVive Health Expo",
      startdate: "09/02/24",
      enddate: "22/02/25",
      location: "Hall D, Innovation Exhibition Center",
      status: "Draft",
      action: "Complete Setup",
    },
    {
      projectname: "ArtNova Visual Expo",
      startdate: "10/02/25",
      enddate: "30/01/25",
      location: "Hall F, Technology Showcase",
      status: "Draft",
      action: "Complete Setup",
    },
    {
      projectname: "DesignForward Meetup",
      startdate: "06/01/25",
      enddate: "10/02/25",
      location: "Hall 21B, Future Tech Pavilion",
      status: "Published",
      action: "View Details",
    },
  ];

  const [activeTabs, setactiveTabs] = useState<
    "user" | "exhibitor" | "project" | "contractsettings" | "localization"
  >("user");
  const handleTabs = (val: any) => {
    setactiveTabs(val);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 mt-6">
      <BackButton />
      <div className="mb-8">
        <Link
          href={"/"}
          className={`${pathname === "/" ? "text-black" : "text-gray-400"}`}
        >
          Contracts
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={"/techsummit"}
          className={`${
            pathname === "/techsummit" ? "text-black" : "text-gray-400"
          }`}
        >
          Tech Summit Contracts
        </Link>
      </div>
      <h1 className="font-semibold text-xl sm:text-3xl mb-4">
        Tech Summit Contract
      </h1>
      <div className="flex gap-8 md:flex-row flex-col">
        <button className="text-gray-600 cursor-pointer ">Sub Admins</button>
        <button
          className={`${
            activeTabs === "user"
              ? "border-blue-400 text-blue-400 border-b-2"
              : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleTabs("user")}
        >
          Users
        </button>
        <button
          className={`${
            activeTabs === "exhibitor"
              ? "border-blue-400 text-blue-400 border-b-2"
              : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleTabs("exhibitor")}
        >
          Exhibitors
        </button>
        <button
          className={`${
            activeTabs === "project"
              ? "border-blue-400 text-blue-400 border-b-2"
              : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleTabs("project")}
        >
          Projects
        </button>
        <button
          className={`${
            activeTabs === "contractsettings"
              ? "border-blue-400 text-blue-400 border-b-2"
              : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleTabs("contractsettings")}
        >
          Contract Settings
        </button>
        <button
          className={`${
            activeTabs === "localization"
              ? "border-blue-400 text-blue-400 border-b-2"
              : "text-gray-600"
          } cursor-pointer`}
          onClick={() => handleTabs("localization")}
        >
          Localization
        </button>
      </div>
      <div className="">
        <Separator />
      </div>
      {/* User Table */}
      {activeTabs === "user" && (
        <UserTable contracts={userContract}></UserTable>
      )}
      {/* Exhibitor Table */}
      {activeTabs === "exhibitor" && (
        <ExhibitorTable contracts={exhibitorContract}></ExhibitorTable>
      )}
      {/* Project Table */}
      {activeTabs === "project" && (
        <ProjectTable contracts={projectContract}></ProjectTable>
      )}
      {/* Contract Setting */}
      {activeTabs === "contractsettings" && <ContractSetting></ContractSetting>}
      {activeTabs === "localization" && <Localization />}
    </div>
  );
};

export default TechSummitContract;
