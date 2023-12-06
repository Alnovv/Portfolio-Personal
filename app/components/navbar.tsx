"use client";
import Link from "next/link";
import React from "react";
Link;



const navbar = () => {

  return (
    <>
      <header className="sticky top-0 z-50 max-sm:flex max-sm:justify-center">
        <nav className="justify-center items-center py-8 flex text-white z-auto ">
          <ul className="flex backdrop-blur-lg bg-white/10   rounded-[25px] gap-4 p-3 z-10">
            <Link
              href="/"
              className="ml-3 cursor-pointer hover:text-[#FD9A3E] transition-all duration-300"
            >
              <li> Home </li>{" "}
            </Link>
            <Link
              href="/profile"
              className=" cursor-pointer hover:text-[#FD9A3E] transition-all duration-300"
            >
              <li>Profile </li>{" "}
            </Link>
            <Link
              href="/portfolio"
              className=" cursor-pointer hover:text-[#FD9A3E] transition-all duration-300"
            >
              <li>Portfolio</li>{" "}
            </Link>
            <Link
              href="/contact"
              className="mr-3 cursor-pointer hover:text-[#FD9A3E] transition-all duration-300"
            >
              <li>Contact </li>{" "}
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default navbar;
