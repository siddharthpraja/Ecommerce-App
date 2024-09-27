// ProductFilterControls.tsx
"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";

interface ProductFilterControlsProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
}

const ProductFilterControls: React.FC<ProductFilterControlsProps> = ({
  search,
  setSearch,
  category,
  setCategory,
  priceRange,
  setPriceRange,
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products..."
          className="px-2 py-1 border rounded"
        />
      </div>
      <div className="flex items-center py-10 gap-2">
        <BiCategory size={20} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <GiPriceTag size={20} />
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All Price Ranges</option>
          <option value="0-50">$0-$50</option>
          <option value="51-100">$51-$100</option>
          <option value="101-200">$101-$200</option>
          <option value="201+">$201+</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilterControls;
