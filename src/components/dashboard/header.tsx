import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Header = () => {
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
            <h1 className="font-semibold md:text-lg text-xs">John Doe</h1>
          </div>
          <div className="md:text-base text-xs">
            <h3>johndoe@gmail.com</h3>
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
