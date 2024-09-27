'use client';

import React, { useEffect, useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

interface Product {
  id: string | number;
  category: string;
  title: string;
  image: string;
  price: number;
}

interface CartProduct extends Product {
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
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

  const handleRemove = (productId: string | number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const handleAddQuantity = (productId: string | number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const handleDecreaseQuantity = (productId: string | number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
        : product
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const handleAddToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    } else {
      const newProduct: CartProduct = { ...product, quantity: 1 };
      const updatedCart = [...cart, newProduct];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
    window.location.reload();
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, product) => acc + product.price * product.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg font-medium">Cart is empty</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between mb-4 border-b-2 border-gray-200 py-2"
            >
              <div className="flex items-center gap-4 justify-center">
                <div className="flex items-center justify-center w-20 h-20">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="bg-cover bg-center w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{product.title}</h2>
                  <p className="text-md font-medium">
                    ${product.price} x {product.quantity}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDecreaseQuantity(product.id)}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold p-2 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => handleAddQuantity(product.id)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
    </div>
  );
}