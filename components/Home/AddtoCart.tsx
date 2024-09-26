"use client";
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
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    // Check if product already exists in cart
    const existingProduct = cart.find((item: Product) => item.id === product.id);

    if (existingProduct) {
      // Update quantity by 1
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      // Add new product with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setIsAdded(true);
    window.location.reload();
    setLoading(false);
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      onClick={handleAddToCart}
    >
      {loading ? "Adding..." : isAdded ? "Added to Cart" : "Add to Cart"}
    </button>
  );
}