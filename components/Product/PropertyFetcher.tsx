"use client";
import React, { useState, useEffect } from "react";
import RecommendedProperties from "./RecommendedProperties";
import PropertyDetails from "./Singleproducts";

interface Property {
  _id: string;
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
  params: { id: string };
  data: Property[];
}

export default function PropertyFetcher({ params, data }: Props) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );

  useEffect(() => {
    if (data) {
      const foundProperty = data.find((property) => property._id === params.id);
      setSelectedProperty(foundProperty || null);
    }
  }, [params.id, data]);

  if (!selectedProperty) {
    return <p>Property not found.</p>;
  }

  const recommendedProperties = data.filter(
    (property) =>
      property._id !== selectedProperty._id &&
      property.location === selectedProperty.location
  );

  return (
    <>
      <PropertyDetails selectedProperty={selectedProperty} />
      {recommendedProperties.length > 0 && (
        <RecommendedProperties recommendedProperties={recommendedProperties} />
      )}
    </>
  );
}
