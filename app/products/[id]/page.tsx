import AddToCart from "@/components/Home/AddtoCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: any;
  category: string;
  title: string;
  image: string;
  price: number;
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = params.id;
  let product: Product | null = null;
  let recommendedProducts: Product[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    );
    const data = await response.json();
    product = data;

    if (product) {
      const categoryResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?category=${product.category}&limit=4`
      );
      const categoryData = await categoryResponse.json();
      recommendedProducts = categoryData.filter(
        (p: Product) => p.id !== productId
      );
    }
  } catch (error) {
    console.error("Failed to fetch product or recommended products:", error);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-16 p-4">
      <div className="flex flex-col md:flex-row  justify-center gap-4">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="object-contain aspect-square"
        />
        <div className="flex-1 w-full h-1/2">
          <h1 className="text-3xl">{product.title}</h1>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <div className="mt-auto flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Buy now
            </button>
            <AddToCart product={product} />
          </div>
        </div>
      </div>

      {recommendedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl">Recommended products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {recommendedProducts.map((recommendedProduct) => (
              <div
                key={recommendedProduct.id}
                className="flex flex-col h-full rounded-lg items-center gap-4 p-4 shadow-md"
              >
                <Link href={`/products/${recommendedProduct.id}`}>
                  <Image
                    src={recommendedProduct.image}
                    alt={recommendedProduct.title}
                    width={200}
                    height={200}
                    className="object-contain aspect-square"
                  />
                </Link>
                <div>
                  <h3 className="text-lg">{recommendedProduct.title}</h3>
                  <p>${recommendedProduct.price}</p>
                </div>
                <div className="mt-auto flex gap-4">
                  <AddToCart product={recommendedProduct} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
