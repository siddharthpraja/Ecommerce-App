import React from "react";
import Image from "next/image";
import AddToCart from "../Home/AddtoCart";

interface Property {
  _id: string; // Use string or number instead of any
  location: string;
  title: string;
  image_url: string;
  price_per_night: number;
  bedrooms: number;
  amenities: string[];
  latitude: number;
  longitude: number;
  description: string;
}

interface Props {
  selectedProperty: Property;
}

export default function PropertyDetails({ selectedProperty }: Props) {
  return (
    <div className="container mx-auto onload p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
        <Image
          src={selectedProperty?.image_url}
          alt={selectedProperty?.title}
          width={400}
          loading="eager"
          priority
          height={400}
          className="object-contain aspect-square rounded-lg"
        />
        <div className="flex-1 gap-2 md:border md:p-8 ">
          <p className="text-sm text-gray-600">{selectedProperty?.location}</p>
          <h1 className="text-3xl font-bold mb-2">{selectedProperty?.title}</h1>
          <div className="md:flex gap-4 md:items-center">
          <p className="text-base">{selectedProperty?.bedrooms} Bedrooms</p>
          <p className="text-xl font-bold mb-2 text-primary underline underline-offset-4 decoration-emerald-600">
            ₹{selectedProperty?.price_per_night} / night
          </p>
          </div>
          <p className="text-sm ">
            Amenities:{" "}
            {selectedProperty?.amenities
              ? selectedProperty?.amenities.join(", ")
              : "None"}
          </p>
          <div className="py-2">
            <AddToCart selectedProperty={selectedProperty} />
          </div>
          <p className="text-base w-9/10">
            Description: A comfortable and luxurious retreat,{" "}
            {selectedProperty?.title} offers exceptional hospitality and
            top-notch amenities. Located in the heart of{" "}
            {selectedProperty?.location}, our hotel features{" "}
            {selectedProperty?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
