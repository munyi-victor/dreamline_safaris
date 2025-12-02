"use client";

import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { usePathname } from "next/navigation";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";

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
      path: "/contact-us",
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean | null>(null);

  const pathname = usePathname();

  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const role = user?.publicMetadata?.role;

  const isHome = pathname === "/";
  const isAdminRoute = pathname.includes("/dashboard");

  const toggleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignIn = () => {
    openSignIn();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isAdminRoute) return null;

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center h-16 px-6 md:px-16 lg:px-24 ${
        isHome ? "" : "shadow-sm"
      } ${isScrolled && "bg-white/80 shadow-md backdrop-blur-lg z-10"}`}
    >
      <Link
        href="/"
        className="text-3xl md:text-4xl font-bold hover:translate-0.5 transition-all"
      >
        Dreamline
      </Link>

      <div className="hidden md:flex md:flex-row gap-3 items-center">
        {navLinks.map((link, index) => (
          <div key={index}>
            <Link
              href={link.path}
              className={`group gap-1 items-center text-xl p-1 rounded-xl hover:text-gray-600`}
            >
              {link.label}
              {/* {pathname === link.path && (
                <div className="h-0.5 w-full bg-gray-700" />
              )} */}
            </Link>
          </div>
        ))}

        {role === "admin" && (
          <Link href="/dashboard" className="p-1 border rounded-xl">
            Dashboard
          </Link>
        )}
      </div>

      <div className="hidden md:flex flex-row items-center gap-3">
        <CustomButton title="Book now" theme="primary" />

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <CustomButton title="Login" handleClick={handleSignIn} />
        )}
      </div>

      {/* mobile screen nav */}
      <div className="md:hidden">
        <div className="flex flex-row gap-3 items-center">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SearchIcon className="cursor-pointer" />
          )}

          <button onClick={toggleOpenMenu} className="cursor-pointer">
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <div className="bg-white/95 shadow-md text-gray-700 backdrop-blur z-10 flex flex-col gap-3 absolute right-0 top-16 w-52 items-center py-2 pb-4">
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

            {role === "admin" && (
              <Link href="/dashboard" className="p-1 border rounded-xl">
                Dashboard
              </Link>
            )}

            {isSignedIn ? (
              ""
            ) : (
              <CustomButton title="Login" handleClick={handleSignIn} />
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
