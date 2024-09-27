import Hero from "@/components/Home/Hero";
import ProductList from "@/components/Product/Product";

interface Product {
  id: any;
  category: string;
  title: string;
  image: string;
  price: number;
}

export default async function Home() {
  let products: Product[] = [];
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/products");
    const data = await response.json();
    products = data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    products = [];
  }
  return (
    <div className="overflow-hidden flex items-center flex-col px-4 md:px-8 lg:px-16 2xl:px-32">
      <Hero />
      <ProductList products={products} />
    </div>
  );
}
