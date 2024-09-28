import PropertyFilter from "@/components/Product/PropertyFilter";


interface Property {
  _id: any;
  id?: any; // Optional if you still want to keep it
  location: string;
  title: string;
  description: string;
  image_url: string;
  price_per_night: number;
  bedrooms: number;
  amenities: string[];
  latitude: number;
  longitude: number;
  distance?: number; // Add distance field if needed
}

export default async function PropertyPage() {
  let properties: Property[] = [];
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }
    const response = await fetch(apiUrl);
    const data = await response.json();
    properties = data;
  } catch (error) {
    console.error("Failed to fetch properties:", error);
    properties = [];
  }

  return (
    <div className="">
      <PropertyFilter data={properties} />
    </div>
  );
}