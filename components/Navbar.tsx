import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "../images/logonobg.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import CartTotal from "./Cart/TotalCart";

const Navbar = () => {
  return (
    <div className="px-6 md:px-8 lg:px-16 2xl:px-32 top-0 z-50 sticky bg-neutral-100 overflow-hidden h-16 flex justify-between items-center">
      <div className=" lg:flex hidden items-center gap-4">
        <HiOutlineMenuAlt2 className="text-3xl p-1 rounded-xl  bg-white relative" />
        <div className="flex text-sm gap-4">
          <Link href={"/properties"}>Properties</Link>
          <Link href={"/about"}>About us</Link>
        </div>
      </div>

      <Link href="/">
        <Image
          src={logo}
          loading="eager"
          priority
          width={100}
          height={50}
          className="w-14"
          alt="logo"
        />
      </Link>
      <div className="flex justify-center text-sm gap-4 items-center">
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div className="flex gap-4">
              <UserButton />
            </div>
            <CartTotal />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
