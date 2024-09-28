import Link from "next/link";
import React from "react";

const Showmore = () => {
  return (
    <div className="flex justify-between mt-10 items-center">
      <div className="">
        <h1 className="md:text-3xl text-2xl font-bold">Latest Hotels</h1>
        <p className="md:text-sm text-xs">Rest, Relax, Rejuvenate</p>
      </div>
      <Link href={'/properties'} className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-md">
        Show More
      </Link>
    </div>
  );
};

export default Showmore;
