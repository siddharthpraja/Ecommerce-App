
import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddtoCart from "../Home/AddtoCart";

interface Product {
  id: any;
  category: string;
  title: string;
  image: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 lg:grid-cols-4 gap-4 mt-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col h-full items-center rounded-lg gap-4 p-4 shadow-md"
          >
            <Link href={`products/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
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
        ))
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default ProductList;
