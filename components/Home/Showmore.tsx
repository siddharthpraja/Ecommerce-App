import Link from "next/link";
import React from "react";

const Showmore = () => {
  return (
    <div className="flex justify-between mt-10 m-4 items-center">
      <div className="">
        <h1 className="md:text-4xl text-outline text-transparent text-2xl font-bold">Latest Hotels</h1>
        <p className="md:text-lg font-bold text-neutral-700 text-xs">Rest, Relax, Rejuvenate</p>
      </div>
      <Link href={'/properties'} className="text-emerald-500 text-xs hover:bg-emerald-700 hover:text-white border border-emerald-500 font-bold py-2 px-4 rounded">
        Show all
      </Link>
    </div>
  );
};

export default Showmore;
