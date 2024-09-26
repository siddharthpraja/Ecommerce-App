import Image from "next/image";
import React from "react";
import AddtoCart from "./AddtoCart";
import Link from "next/link";

interface Product {
  id: any;
  category: string;
  title: string;
  image: string;
  price: number;
}

export default async function Productspage() {
  let products: Product[] = [];
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products");
    const data = await response.json();
    products = data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    products = [];
  }
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col h-full items-center rounded-lg gap-4 p-4 shadow-md"
            >
              <Link href={`products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.id}
                  width={200}
                  height={200}
                  className="object-contain aspect-square"
                />
              </Link>
              <div>
                <h1 className="text-lg">{product.title}</h1>
                <p>{product.category}</p>
                <p>${product.price}</p>
              </div>
              <div className="mt-auto flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                  Buy now
                </button>
                <AddtoCart product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
