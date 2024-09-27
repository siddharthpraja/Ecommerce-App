"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';

interface CartItem {
  price: number;
  quantity: number;
}

const CartTotal = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const localCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
    setCart(localCart);
    setCartCount(localCart.length);
    setTotal(
      localCart.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0)
    );
  }, []);

  return (

        <Link
          href={"/cart"}
          className="p-2 rounded-xl text-xs flex gap-2 bg-white relative"
        >
          <div className="px-[8px] py-[1px] bg-orange-500 rounded-full text-[10px] -right-2 absolute -top-2">
            {cartCount}{" "}
          </div>
          <IoCartOutline className="text-lg" />${total.toFixed(2)}
        </Link>
  );
};

export default CartTotal;