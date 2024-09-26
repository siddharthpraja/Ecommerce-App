import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSearch } from "react-icons/md";
import logo from "../images/logonobg.png";
import CartTotal from "./Home/TotalCart";

const Navbar = () => {
  return (
    <div className="px-6 md:px-8 lg:px-16 2xl:px-32 top-0 z-50 sticky bg-neutral-100 overflow-hidden h-16 flex justify-between items-center">
      <div className=" flex group items-center gap-4">
        <HiOutlineMenuAlt2 className="text-2xl p-1 rounded-xl  bg-white relative" />
        <div className="group-hover:opacity-100 hidden opacity-0 lg:flex text-sm gap-4">
          <Link href={'/products'}>Products</Link>
          {/* <Link href={'/about'}>About us</Link>
          <Link href={'/about'}>Contact us</Link> */}
        </div>
      </div>

      <Link href="/">
        <Image src={logo} width={100} height={50} className="w-14" alt="logo" />
      </Link>
      <div className="flex justify-center text-sm gap-4 items-center">
        <div className="lg:flex items-center gap-2 hidden">
          <Link href="/login">Login</Link>
          <div className="w-[1px] h-5 bg-neutral-300" />
          <Link href="/signup">Create Account</Link>
          <div className="p-2 rounded-xl bg-white">
            <MdSearch className="text-lg" />
          </div>
        </div>
        <CartTotal />
      </div>
    </div>
  );
};

export default Navbar;
