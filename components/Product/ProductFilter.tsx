// ProductFilter.tsx
"use client";
import React, { useState, useEffect } from "react";
import ProductFilterControls from "./Filtercontrol";
import ProductList from "./Product";
interface Product {
  id: any;
  category: string;
  title: string;
  image: string;
  price: number;
}

interface ProductFilterProps {
  data: Product[];
}

const ProductFilter: React.FC<ProductFilterProps> = ({ data }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const filteredProducts = data
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    .filter((product) => category === "" || product.category === category)
    .filter((product) => {
      if (priceRange === "") return true;
      const [min, max] = priceRange.split("-").map(Number);
      return product.price >= min && (max ? product.price <= max : true);
    });

  return (
    <div className="py-10 w-full">
      <div className="container mx-auto">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <ProductFilterControls
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
            <ProductList products={filteredProducts} />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
