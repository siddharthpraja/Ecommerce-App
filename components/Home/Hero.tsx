import React from "react";

import bg from "../../images/bg.webp";
import Image from "next/image";
import { MdOutlineCircle } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full my-5 bg-neutral-50 rounded-3xl h-[60vh] relative">
      <div className="lg:p-20 md:px-10 p-8 items-start space-y-3 absolute z-20 ">
        <h1 className="md:text-5xl text-4xl font-bold text-neutral-800">
          Lighnting Fast Booking
        </h1>
        <h1 className="md:text-xl text-lg  text-neutral-800">Book Your Hotel Now!</h1>
      </div>
      <Image
        src={bg}
        alt="bg"
        width={500}
        height={500}
        className="bg-cover md:w-5/12 md:h-4/5 w-3/4 h-3/4 absolute right-0 bottom-0 z-10"
      />
      <div className="absolute bottom-10 left-4 md:left-10 lg:left-20 flex items-center gap-1 z-20 ">
        01
        <div className="flex items-center">
          <MdOutlineCircle className="text-neutral-800 text-xs" />
          <div className="bg-neutral-800 w-16 h-[1px]" />
          <MdOutlineCircle className="text-neutral-800 text-xs" />
        </div>
        05
      </div>
    </div>
  );
};

export default Hero;
