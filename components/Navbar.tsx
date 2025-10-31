"use client";

import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Hotels",
      path: "/rooms",
    },
    {
      label: "About Us",
      path: "/about",
    },
    {
      label: "Contact Us",
      path: "/contact",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean | null>(null);

  const pathname = usePathname();

  const isHome = pathname === "/";

  const toggleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex flex-row justify-between items-center h-16 px-6 md:px-16 lg:px-24 text-gray-700 ${
        isHome ? "" : "shadow-sm"
      } ${
        isScrolled &&
        "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg z-10"
      }`}
    >
      <Link
        href="/"
        className="text-3xl md:text-4xl font-bold hover:translate-0.5 transition-all"
      >
        Dreamline
      </Link>

      <div className="hidden md:flex md:flex-row gap-3">
        {navLinks.map((link, index) => (
          <div key={index}>
            <Link
              href={link.path}
              className={`text-md py-1 px-2 rounded hover:bg-gray-100 ${
                pathname === link.path && "bg-gray-200"
              }`}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>

      <div className="hidden md:flex flex-row items-center gap-3">
        <SearchIcon />

        <CustomButton title="Login" />
      </div>

      {/* mobile screen nav */}
      <div className="md:hidden">
        <div className="flex flex-row gap-3 items-center">
          <SearchIcon className="cursor-pointer" />
          <button onClick={toggleOpenMenu} className="cursor-pointer">
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-white/95 shadow-md text-gray-700 backdrop-blur z-10 flex flex-col gap-3 absolute right-0 top-16 w-52 items-center py-2">
            {navLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-md hover:underline"
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <CustomButton title="Login" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
