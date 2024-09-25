"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Product {
    id: any;
    category: string;
    title: string;
    image: string;
    price: number;
  }
  
interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setIsAdded(true);
    router.push("/cart");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      onClick={handleAddToCart}
    >
      {isAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}