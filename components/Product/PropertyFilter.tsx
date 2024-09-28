"use client";
import React, { useState, useEffect } from "react";
import PropertyList from "./PropertyList";
import PropertyFilterControls from "./Filtercontrol";

interface Property {
  _id: any;
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

interface PropertyFilterProps {
  data: Property[];
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ data }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Move calculateDistance function here
  const calculateDistance = (lat: number, lon: number) => {
    // Calculate distance from user's location (assuming it's available)
    // For simplicity, this example uses a hardcoded user location
    const userLat = 37.7749;
    const userLon = -122.4194;
    const distance = Math.sqrt((lat - userLat) ** 2 + (lon - userLon) ** 2);
    return distance;
  };

  const filteredProperties = data
    .filter((property) =>
      property.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (property) =>
        location === "" ||
        property.location.toLowerCase().includes(location.toLowerCase())
    )
    .filter(
      (property) => bedrooms === "" || property.bedrooms.toString() === bedrooms
    )
    .filter((property) => {
      if (priceRange === "") return true;
      const [min, max] = priceRange.split("-").map(Number);
      return (
        property.price_per_night >= min &&
        (max ? property.price_per_night <= max : true)
      );
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price_per_night - b.price_per_night;
      if (sortBy === "price-desc") return b.price_per_night - a.price_per_night;
      if (sortBy === "location") {
        const distanceA = calculateDistance(a.latitude, a.longitude);
        const distanceB = calculateDistance(b.latitude, b.longitude);
        return distanceA - distanceB;
      }
      return 0;
    });
  return (
    <div className="py-10 w-full">
      <div className="container mx-auto">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <PropertyFilterControls
              search={search}
              setSearch={setSearch}
              location={location}
              setLocation={setLocation}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              bedrooms={bedrooms}
              setBedrooms={setBedrooms}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            <PropertyList properties={filteredProperties} />
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyFilter;
