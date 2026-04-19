"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SidebarFilters from "@/components/SidebarFilters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });
  
  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <main className="bg-gray-100 min-h-screen py-8">
        <div className="flex flex-row gap-4 max-w-7xl mx-auto px-6">

          {/* Sidebar Component */}
          <SidebarFilters
            category={category}
            setCategory={setCategory}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

          {/* Product Display Area */}
          <section className="w-3/4 bg-white shadow rounded-lg p-4">
            <div>
              <h2 className="text-lg font-semibold mb-4">
                Product Listing
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-10">
                  No products found
                </p>
              )}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}