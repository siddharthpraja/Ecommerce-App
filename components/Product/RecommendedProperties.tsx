import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Property {
  _id: string;
  location: string;
  title: string;
  description: string;
  image_url: string;
  price_per_night: number;
}

interface Props {
  recommendedProperties: Property[];
}

export default function RecommendedProperties({
  recommendedProperties,
}: Props) {
  return (
    <section className="recommended-properties onload mt-16">
      <h2 className="md:text-4xl text-outline text-transparent text-2xl font-bold">Recommended properties</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommendedProperties.slice(0, 4).map((property) => (
          <li key={property._id}>
            <Link href={`/properties/${property._id}`} className="block py-10">
              <article className="flex flex-col h-full rounded-lg items-center gap-4 p-4 shadow-md hover:shadow-lg">
                <Image
                  src={property.image_url}
                  alt={property.title}
                  loading="eager"
                  priority
                  width={200}
                  height={200}
                  className="object-contain aspect-square rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">{property.title}</h3>
                  <p className="text-base font-bold mb-2 text-primary underline underline-offset-4 decoration-emerald-600">
                    ₹{property.price_per_night} / night
                  </p>
                  <p className="text-xs text-gray-600">{property.location}</p>
                  <p className="text-base line-clamp-1">{property.description}</p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
