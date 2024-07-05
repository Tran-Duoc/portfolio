import Link from "next/link";
import React from "react";
import { MoveRight } from "lucide-react";
import { NAV_CONTENTS } from "@/constants/nav-content";

const NavList = () => {
  return (
    <div className="mt-4 flex w-full flex-wrap items-center justify-center space-x-8">
      {NAV_CONTENTS.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-x-2 hover:text-blue-500 hover:underline"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavList;
