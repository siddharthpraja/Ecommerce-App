import Hero from "@/components/Home/Hero";
import Showmore from "@/components/Home/Showmore";
import PropertyList from "@/components/Product/PropertyList";

interface Property {
  _id: any;
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

export default async function Page() {

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  const properties: Property[] = await response.json();

  return (
    <div className="">
      <Hero />
      <Showmore />
      <PropertyList properties={properties} />
    </div>
  );
}
