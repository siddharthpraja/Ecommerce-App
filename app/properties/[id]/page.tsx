"use client";
import AddToCart from "@/components/Home/AddtoCart";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Property {
  _id: string; // Assuming _id is a string
  location: string;
  title: string;
  description: string;
  image_url: string;
  price_per_night: number;
  bedrooms: number;
  amenities: string[];
  latitude: number;
  longitude: number;
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!);
      const data: Property[] = await response.json();
      setProperties(data);

      const foundProperty = data.find((property) => property._id === params.id);
      setSelectedProperty(foundProperty || null);
    };

    fetchProperties();
  }, [params.id]);

  if (!selectedProperty) {
    return <p>Property not found.</p>; // Handle case where property is not found
  }

  // Filter for recommended properties in the same location
  const recommendedProperties = properties.filter(
    (property) =>
      property._id !== selectedProperty._id &&
      property.location === selectedProperty.location
  );

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
        <Image
          src={selectedProperty.image_url}
          alt={selectedProperty.title}
          width={400}
          height={400}
          className="object-contain aspect-square rounded-lg"
        />
        <div className="flex-1 gap-2">
          <h1 className="text-3xl font-bold mb-2">{selectedProperty.title}</h1>
          <p className="text-lg text-gray-600">{selectedProperty.location}</p>
          <p className="text-lg text-blue-500">
            ₹{selectedProperty.price_per_night} / night
          </p>
          <p className="text-lg">{selectedProperty.bedrooms} Bedrooms</p>

          <p className="text-lg">
            Amenities:{" "}
            {selectedProperty.amenities
              ? selectedProperty.amenities.join(", ")
              : "None"}
          </p>
          <div className="py-2">
            <AddToCart selectedProperty={selectedProperty} />
          </div>
          <p className="text-lg w-4/5">
            Description: A comfortable and luxurious retreat,{" "}
            {selectedProperty.title} offers exceptional hospitality and
            top-notch amenities. Located in the heart of{" "}
            {selectedProperty.location}, our hotel features{" "}
            {selectedProperty.description}
          </p>
        </div>
      </div>

      {recommendedProperties.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Recommended properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedProperties.slice(0, 4).map((recommendedProperty) => (
              <Link
                key={recommendedProperty._id}
                href={`/properties/${recommendedProperty._id}`}
                className="block"
              >
                <div className="flex flex-col h-full rounded-lg items-center gap-4 p-4 shadow-md hover:shadow-lg">
                  <Image
                    src={recommendedProperty.image_url}
                    alt={recommendedProperty.title}
                    width={200}
                    height={200}
                    className="object-contain aspect-square rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      {recommendedProperty.title}
                    </h3>
                    <p className="text-lg text-blue-500">
                      ₹{recommendedProperty.price_per_night} / night
                    </p>

                    <h3 className="text-sm text-gray-600">
                      {recommendedProperty.location}
                    </h3>
                    <p className="text-lg line-clamp-2">{recommendedProperty.description}..</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
