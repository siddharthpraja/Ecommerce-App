import PropertyFetcher from "@/components/Product/PropertyFetcher";
import React from "react";

interface Props {
  params: { id: string };
}
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

export default async function Singleproduct({ params }: Props) {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  const properties: Property[] = await response.json();

  return (
    <div>
      <PropertyFetcher params={params} data={properties} />
    </div>
  );
}
