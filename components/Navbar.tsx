import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import logo from "../images/logonobg.png";
import { MdSearch } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-screen px-4 md:px-8 lg:px-16 2xl:px-32 bg-neutral-100 overflow-hidden h-16 flex justify-between  items-center  ">
      <div className="p-1 rounded-xl m-2 bg-white">
        <HiOutlineMenuAlt2 className="text-2xl" />
      </div>
      <Link href={"/"}>
        <Image src={logo} width={100} height={50} className="w-14" alt="logo" />
      </Link>
      <div className="flex justify-center text-sm gap-4 items-center">
        <div className="lg:flex items-center gap-2 hidden">
          <Link href={"/login"}>Login</Link>
          <div className="w-[1px] h-5 bg-neutral-300" />
          <Link href={"/signup"}>Create Account</Link>
          <div className="p-2 rounded-xl  bg-white">
            <MdSearch className="text-lg" />
          </div>
        </div>
        <Link href={'/cart'} className="p-2 rounded-xl  flex gap-2 bg-white relative">
          <div className="w-2 h-2 bg-orange-500 rounded-full right-0 absolute top-0" />
          <IoCartOutline className="text-lg" />
          69.25
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
