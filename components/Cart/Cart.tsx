"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

interface Property {
  _id: string; // Assuming _id is a string
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

interface CartProduct extends Property {
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-bold">Loading...</p>
      </div>
    );
  }

  const handleRemove = (productId: string) => {
    const updatedCart = cart.filter((product) => product._id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const handleAddQuantity = (productId: string) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const handleDecreaseQuantity = (productId: string) => {
    const updatedCart = cart.map((product) =>
      product._id === productId
        ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
        : product
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (acc, product) => acc + product.price_per_night * product.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg font-medium">Cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li
              key={product._id}
              className="flex items-center  justify-between mb-4 border-b-2 border-gray-200 py-2"
            >
              <Link
                href={`/properties/${product._id}`}
                className="flex items-center gap-4 justify-center"
              >
                <div className="flex items-center justify-center w-20 h-20">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="bg-cover bg-center w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{product.title}</h2>

                  <p className="text-md font-medium flex gap-1 items-center">
                    <button
                      onClick={() => handleDecreaseQuantity(product._id)}
                      className="border font-bold p-1 rounded "
                    >
                      -
                    </button>
                    ₹{product.price_per_night}
                    <button
                      onClick={() => handleAddQuantity(product._id)}
                      className="border font-bold p-2 rounded"
                    >
                      +
                    </button>
                    x {product.quantity}
                  </p>
                </div>
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRemove(product._id)}
                  className="text-sm  p-2 rounded"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="text-lg font-bold">Total: ₹{calculateTotal()}</p>
    </div>
  );
}
