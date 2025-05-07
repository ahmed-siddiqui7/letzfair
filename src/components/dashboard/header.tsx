import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-4">
      <div>
        <Link href="/">
          <img src="/dashboardlogo.png" alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-4 align-middle">
        <div>
          <div>
            <h1 className="font-semibold">John Doe</h1>
          </div>
          <div>
            <h3>johndoe@gmail.com</h3>
          </div>
        </div>
        <div className="">
          <img src="/avatar.png" alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;
