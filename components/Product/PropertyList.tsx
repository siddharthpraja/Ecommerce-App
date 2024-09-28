import Link from "next/link";
import React from "react";

interface Property {
  _id: string;
  title: string;
  description: string;
  location: string;
  price_per_night: number;
  bedrooms: number;
  amenities: string[];
  image_url: string;
  latitude: number;
  longitude: number;
  distance?: number; // Add distance field
}

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-4 gap-4 mt-4">
      {properties.map((property, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-md"
        >
          <Link href={`/properties/${property._id}`}>
            <img
              src={property.image_url}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{property.title}</h2>
              <p className="text-lg font-semibold mt-2">
              ₹{property.price_per_night} / night
              </p>
              <p className="text-sm text-gray-500">{property.location}</p>
              {property.distance && (
                <p className="text-sm text-gray-500">
                  <strong>Distance:</strong> {property.distance.toFixed(2)}{" "}
                  miles
                </p>
              )}
              <p className="mt-2 text-xs">
                <strong>Amenities:</strong> {property.amenities.join(", ")}
              </p>
              <p className="mt-2">
                <strong>Bedrooms:</strong> {property.bedrooms}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
