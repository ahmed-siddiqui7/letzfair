"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useUserContext } from "@/context/user";
import { useUserDetails } from "@/app/(auth)/sign-in/_query/user-details";
import { userResponseData } from "@/app/(auth)/sign-in/_query/user-details";

const Header = () => {
  // CONTEXT FOR ACCESS TOKEN AND USER DETAILS

  const { user, setuserDetails } = useUserContext();
  const { data, isLoading } = useUserDetails();

  useEffect(() => {
    if (data) {
      setuserDetails(data);
    }
  }, [user, data]);

  return (
    <div className="flex items-center md:justify-between md:px-10 md:py-4 py-2 px-2 md:gap-0 gap-4">
      <div>
        <Link href="/">
          <img src="/dashboardlogo.png" alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-4 align-middle">
        <div>
          <div>
            <h1 className="font-semibold md:text-lg text-xs">
              {user?.first_name}
            </h1>
          </div>
          <div className="md:text-base text-xs">
            <h3>{user?.email}</h3>
          </div>
        </div>
        <div className="">
          <img src="/avatar.png" alt="" className="md:object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;
