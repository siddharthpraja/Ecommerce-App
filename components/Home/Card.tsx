import Image from "next/image";
import React from "react";

import stay from "../../images/stay.png";
import tap from "../../images/booking-online.png";
import search from "../../images/hotel-search.png";

const Card = () => {
  return (
    <div className="container mx-auto p-8 grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1">
      <div className="card bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300">
        <Image
          src={search}
          alt="search"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2 text-primary underline underline-offset-4 decoration-emerald-600">
          Search
        </h1>
        <p className="text-lg text-gray-600">Explore 1500+ cities worldwide</p>
      </div>
      <div className="card bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300">
        <Image
          src={tap}
          alt="tap"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2 text-primary underline underline-offset-4 decoration-emerald-600">
          Tap
        </h1>
        <p className="text-lg text-gray-600">
          Find your perfect stay in minutes
        </p>
      </div>
      <div className="card bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition duration-300">
        <Image
          src={stay}
          alt="stay"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold mb-2 text-primary underline underline-offset-4 decoration-emerald-600">
          Stay
        </h1>
        <p className="text-lg text-gray-600">
          Book with confidence and flexibility
        </p>
      </div>
    </div>
  );
};

export default Card;
