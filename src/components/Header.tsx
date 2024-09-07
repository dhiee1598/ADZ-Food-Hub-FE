"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { GrUserNew } from "react-icons/gr";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuBar = () => setIsOpen(!isOpen);

  return (
    <div className="fixed shadow-lg w-full flex h-14 justify-between items-center px-5 backdrop-blur-md">
      <h1 className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-blue-600">
        ADZ K2 Food Hub
      </h1>
      <button type="button" onClick={toggleMenuBar} className="md:hidden relative z-10">
        {isOpen ? (
          <FaTimes size={25} className="animate-pulse" />
        ) : (
          <FaBars size={25} className="animate-pulse" />
        )}
      </button>
      {isOpen && (
        <div className="md:hidden flex shadow-md shadow-black items-center bg-stone-300 rounded-b-md flex-col min-w-[200px] min-h-[300px] pt-20 absolute right-0 top-0">
          <Link
            className="w-full px-2 flex items-center text-start py-2 hover:bg-sky-500 uppercase"
            href={`/sign-in`}
          >
            <IoLogInOutline size={25} className="mr-14" /> Sign In
          </Link>
          <Link
            className="w-full px-2 flex items-center text-start py-2 hover:bg-sky-500 uppercase"
            href={`/sign-up`}
          >
            <GrUserNew size={25} className="mr-14" /> Sign Up
          </Link>
        </div>
      )}
      <div className="hidden md:flex md:items-center md:space-x-3">
        <Link
          className="uppercase rounded-md hover:shadow-sm hover:shadow-black px-4 py-1 font-light shadow-inner min-w-[100px] text-center shadow-slate-900"
          href={`/sign-in`}
        >
          Sign In
        </Link>
        <Link
          className="uppercase rounded-md hover:shadow-sm hover:shadow-black px-4 py-1 font-light shadow-inner min-w-[100px] text-center shadow-slate-900"
          href={`/sign-up`}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
