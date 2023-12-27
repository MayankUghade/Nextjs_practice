"use client";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Mode from "../mode_switch/Mode";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="mt-5 flex justify-center gap-[200px] xs:gap-[180px] md:gap-[150px] lg:gap-[150px] xl:gap-[300px] p-7 text-xl font-semi-bold overflow-hidden">
      <Link className="lg:mr-[150px] lg:px-3 font-bold" href="/">
        Enhancer
      </Link>

      <div className="md:flex hidden gap-5">
        <Mode />
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/portfolio">Portfolio</Link>
      </div>

      <div className="lg:hidden md:hidden flex gap-3">
        <Mode />
        {navbar ? (
          <CloseIcon className="h-9 w-9" onClick={handleToggleNavbar} />
        ) : (
          <MenuIcon className="h-9 w-9" onClick={handleToggleNavbar} />
        )}
      </div>

      {navbar && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-90 z-20 flex"
          onClick={handleToggleNavbar}
        >
          <div className="flex flex-col m-auto p-4 rounded shadow-md text-white">
            <Link href="/" className="p-2 lg:p-3">
              Home
            </Link>
            <Link href="/about" className="p-2 lg:p-3">
              About
            </Link>
            <Link href="/blog" className="p-2 lg:p-3">
              Blog
            </Link>
            <Link href="/contact" className="p-2 lg:p-3">
              Contact
            </Link>
            <Link href="/dashboard" className="p-2 lg:p-3">
              Dashboard
            </Link>
            <Link href="/portfolio" className="p-2 lg:p-3">
              Portfolio
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
