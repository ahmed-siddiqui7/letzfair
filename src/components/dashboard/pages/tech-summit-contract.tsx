"use client";
import React, { useState } from "react";
import BackButton from "../back-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import UserTable from "../table/usertable";
import ExhibitorTable from "../table/exhibitortable";

const TechSummitContract = () => {
  const pathname = usePathname();

  interface TabsValType {
    val: string;
  }

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

  const [activeTabs, setactiveTabs] = useState<"user" | "exhibitor">("user");
  const handleTabs = (val: any) => {
    setactiveTabs(val);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 mt-6 overflow-hidden">
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
      <div className=" mb-10 pb-2 flex gap-8">
        <button className="text-gray-600 cursor-pointer">Sub Admins</button>
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
        <button className="text-gray-600 cursor-pointer">Projects</button>
        <button className="text-gray-600">Contract Settings</button>
        <button className="text-gray-600">Localization</button>
      </div>
      {/* User Table */}
      {activeTabs === "user" && (
        <UserTable contracts={userContract}></UserTable>
      )}
      {/* Exhibitor Table */}
      {activeTabs === "exhibitor" && (
        <ExhibitorTable contracts={exhibitorContract}></ExhibitorTable>
      )}
    </div>
  );
};

export default TechSummitContract;
