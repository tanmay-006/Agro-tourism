"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

type CategoryFilter = "all" | "basmati" | "non-basmati";

export default function HomeProductShowcase() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const filteredProducts = products.filter((product) => {
    if (activeTab === "basmati") return product.category === "Basmati Rice";
    if (activeTab === "non-basmati") return product.category === "Non-Basmati Rice";
    return true;
  });

  // Limit homepage showcase to top 6 items so it stays clean
  const displayedProducts = filteredProducts.slice(0, 6);

  const tabs: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All Grains" },
    { id: "basmati", label: "Premium Basmati" },
    { id: "non-basmati", label: "Non-Basmati Grains" },
  ];

  return (
    <div className="w-full">
      {/* Category Tabs Header */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-full bg-[#f1eadf]/60 p-1.5 border border-[#e2dbc9]/50 shadow-inner relative">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-500 outline-none z-10 ${
                  isActive
                    ? "text-[#fcf5e5] bg-[#2c3f16] shadow-md scale-105"
                    : "text-[#2c3f16]/70 hover:text-[#2c3f16] hover:bg-[#f1eadf]/30"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {displayedProducts.map((product, i) => (
          <div
            key={product.slug}
            className="transition-all duration-700 ease-out transform opacity-0 translate-y-8 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "forwards" }}
          >
            <ProductCard
              slug={product.slug}
              name={product.name}
              description={product.shortDescription}
              image={product.heroImage}
              badge={product.category === "Basmati Rice" ? "BASMATI" : "NON-BASMATI"}
              grainLength={product.grainLength}
              variants={product.variants}
              category={product.category}
            />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-[#2c3f16]/15 bg-white px-6 py-3 text-sm font-semibold text-[#2c3f16] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2c3f16]/30 hover:shadow-md"
        >
          View more products
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
