import React from "react";
import { ModeToggle } from "./mode-toggle";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-transparent bg-zinc-900/0 backdrop-blur duration-200">
      <div className="mx-auto flex w-full max-w-4xl flex-row-reverse items-center justify-between p-6">
        <div className="flex justify-between gap-8">
          <ModeToggle />
        </div>
        <div className="text-zinc-300 duration-200 hover:text-zinc-100">
          <Link href="/">
            <MoveLeft />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
