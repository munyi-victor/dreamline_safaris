"use client";

import { SearchIcon, SunIcon } from "lucide-react";
import Link from "next/link";

const AdminHeader = () => {
  return (
    <header className="bg-slate-800 fixed top-0 left-0 w-full flex flex-row justify-between items-center h-16 px-4 text-gray-200 shadow-md z-20 border-b-slate-500">
      {/* LOGO */}
      <Link
        href="/"
        className="text-3xl md:text-4xl font-bold hover:text-gray-50"
      >
        Dreamline
      </Link>

      {/* BUTTONS */}
      <div className="space-x-2 *:cursor-pointer">
        <button>
          <SearchIcon />
        </button>
        <button>
          <SunIcon />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
