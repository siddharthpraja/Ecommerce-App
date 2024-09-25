import Hero from "@/components/Home/Hero";
import Products from "@/components/Home/Product";

export default function Home() {
  return (
    <div className="overflow-hidden w-screen flex items-center flex-col px-4 md:px-8 lg:px-16 2xl:px-32">
      <Hero />
      <Products/>
    </div>
  );
}
