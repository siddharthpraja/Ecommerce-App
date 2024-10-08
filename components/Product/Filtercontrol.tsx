"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { GiPriceTag } from "react-icons/gi";

interface PropertyFilterControlsProps {
  search: string;
  setSearch: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  bedrooms: string;
  setBedrooms: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

const PropertyFilterControls: React.FC<PropertyFilterControlsProps> = ({
  search,
  setSearch,
  location,
  setLocation,
  priceRange,
  setPriceRange,
  bedrooms,
  setBedrooms,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex flex-col w-full gap-4 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for properties..."
          className="text-emerald-500 text-xs outline-0 border border-emerald-500 font-bold py-2 px-4 rounded"
        />
        <AiOutlineSearch className="border border-emerald-500 text-emerald-500 text-3xl p-1 rounded" />
      </div>
      <div className="flex items-center gap-2 text-emerald-500 text-xs outline-0 border border-emerald-500 font-bold py-2 px-4 rounded w-max">
        <BiCategory size={20} />
        <select
          value={location}
          className="outline-0"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Delhi, Delhi">Delhi</option>
          <option value="Mumbai, Maharashtra">Mumbai</option>
          <option value="Udaipur, Rajasthan">Udaipur</option>
          <option value="Shimla, Himachal Pradesh">Shimla</option>
          <option value="Bengaluru, Karnataka">Bengaluru</option>
        </select>
      </div>
      <div className="flex items-center gap-2 text-emerald-500 text-xs outline-0 border border-emerald-500 font-bold py-2 px-4 rounded w-max">
        <GiPriceTag size={20} />
        <select
          className="outline-0"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">All Price Ranges</option>
          <option value="3000-4000">₹3000-₹4000</option>
          <option value="4000-5000">₹4001-₹5000</option>
          <option value="5001-6000">₹5001-₹6000</option>
          <option value="6001-7000">₹6001-₹7000</option>
        </select>
      </div>
      <div className="flex items-center gap-2 text-emerald-500 text-xs outline-0 border border-emerald-500 font-bold py-2 px-4 rounded w-max">
        <BiCategory size={20} />
        <select
          className="outline-0"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">All Bedrooms</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
          <option value="5">5 Bedroom</option>
        </select>
      </div>
      <div className="flex items-center gap-2 text-emerald-500 text-xs outline-0 border border-emerald-500 font-bold py-2 px-4 rounded w-max">
        <BiCategory size={20} />
        <select
          className="outline-0"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="location">Nearest Location</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyFilterControls;
