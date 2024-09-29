"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
// Import useRouter

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
}

interface AddToCartProps {
  selectedProperty: Property; // Renamed to selectedProperty
}

export default function AddToCart({ selectedProperty }: AddToCartProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleAddToCart = () => {
    setLoading(true);
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    // Check if property already exists in cart
    const existingProperty = cart.find(
      (item: Property) => item._id === selectedProperty._id
    );

    if (existingProperty) {
      // Update quantity by 1
      existingProperty.quantity = (existingProperty.quantity || 1) + 1;
    } else {
      // Add new property with quantity 1
      cart.push({ ...selectedProperty, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setIsAdded(true);
    setLoading(false);

    // Navigate to the cart page
    router.push("/cart"); // Change this path to your actual cart route
  };

  return (
    <button
      className="border border-emerald-500 text-emerald-500 px-4 py-2 hover:bg-emerald-500 hover:text-neutral-50 font-bold   rounded text-xs"
      onClick={handleAddToCart}
      disabled={loading} // Disable button while loading
    >
      {loading ? "Adding..." : isAdded ? "Added to Cart" : "Book Now"}
    </button>
  );
}
