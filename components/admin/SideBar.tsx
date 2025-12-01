import {
  Bed,
  Blocks,
  BookOpenCheck,
  Hotel,
  MenuIcon,
  Settings,
  UserCircle,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <aside className="bg-slate-800 shadow-md border-r-slate-500 h-full fixed z-10 top-0 left-0 w-16 md:w-52 pt-18 pb-4 text-gray-200 flex flex-col">
      <div className="px-4">
        <MenuIcon />
      </div>

      {/* Links */}
      <div className="mt-10 flex flex-col gap-3 grow *:px-4 *:py-2 *:hover:bg-slate-700">
        <Link href="/dashboard" className="flex gap-2">
          <Blocks />
          <span className="hidden md:block">Dashboard</span>
        </Link>
        <Link href="/dashboard/hotels" className="flex gap-2">
          <Hotel />
          <span className="hidden md:block">Hotels</span>
        </Link>
        <Link href="/dashboard/rooms" className="flex gap-2">
          <Bed />
          <span className="hidden md:block">Rooms</span>
        </Link>
        <Link href="/dashboard/bookings" className="flex gap-2">
          <BookOpenCheck />
          <span className="hidden md:block">Bookings</span>
        </Link>
        <Link href="/dashboard/users" className="flex gap-2">
          <Users />
          <span className="hidden md:block">Users</span>
        </Link>
      </div>

      {/* Functions */}
      <div className="flex flex-col gap-3 *:px-4">
        <Link href="/dashboard/profile" className="flex gap-2">
          <UserCircle />
          <span className="hidden md:block">Profile</span>
        </Link>
        <Link href="/dashboard/settings" className="flex gap-2">
          <Settings />
          <span className="hidden md:block">Settings</span>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
