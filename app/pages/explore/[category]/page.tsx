"use client";
import Checked from "@/app/components/Checked";
import { ChevronDown, X } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  {
    id: 1,
    name: "Leather Wallets",
    image:
      "https://images.unsplash.com/photo-1602638034367-26c55969967c?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 2,
    name: "Bracelets",
    image:
      "https://images.unsplash.com/photo-1652169118582-49432bf79172?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 3,
    name: "Handmade Bags",
    image:
      "https://images.unsplash.com/photo-1711548244653-72219aa9ac27?auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 4,
    name: "Decor Items",
    image:
      "https://images.unsplash.com/photo-1759772237984-7dfaf867acc0?auto=format&fit=crop&q=60&w=600",
  },
];

const categoryList = [
  "Jewelry",
  "Home Decor",
  "Accessories",
  "Art & Painting",
  "Clothing",
  "Bags & Purses",
  "Ceramics",
  "Candles",
  "Stationery",
];

export default function FeaturedCreationsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLDivElement | null>(null);

  const toggleCategory = (label: string) => {
    setSelectedCategories((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
      firstItemRef.current?.focus();
    }
  }, [dropdownOpen]);

  return (
    <div className="!p-5 sm:!p-10 lg:!p-20 !my-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 !mb-8">
        Explore Handcrafted Creations
      </h1>

      {/* Filter */}
      <div ref={wrapperRef} className="relative !mb-10">
        <div className="flex flex-wrap gap-3 items-center">
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen((s) => !s)}
            className={`flex items-center gap-2 bg-white/40 backdrop-blur-md border border-white/50 !px-4 !py-2 rounded-xl shadow-sm transition-all duration-200 ${
              dropdownOpen ? "bg-white/70" : "hover:bg-white/60"
            }`}
          >
            <span className="font-medium text-gray-800">Category</span>
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Selected Badges */}
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-2 bg-pink-100 text-pink-700 !px-3 !py-1 rounded-full text-sm font-medium"
              >
                {cat}
                <button
                  onClick={() =>
                    setSelectedCategories((prev) =>
                      prev.filter((c) => c !== cat)
                    )
                  }
                  className="hover:text-pink-900"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-14 left-0 bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl !p-4 w-[260px] z-50 flex flex-col gap-1"
          >
            {categoryList.map((label, idx) => (
              <div
                key={label}
                tabIndex={0}
                ref={idx === 0 ? firstItemRef : null}
                onClick={() => toggleCategory(label)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCategory(label);
                  }
                }}
                className={`flex items-center justify-between !px-3 !py-2 rounded-xl cursor-pointer transition-all duration-150 ${
                  selectedCategories.includes(label)
                    ? "bg-pink-100 text-pink-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <span>{label}</span>
                <Checked checked={selectedCategories.includes(label)} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent text-white !p-4 flex flex-col gap-1 backdrop-blur-[2px]">
              <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
              <p className="text-sm text-white/80">Handmade quality items</p>
              <button className="!mt-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md !py-2 text-sm transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
