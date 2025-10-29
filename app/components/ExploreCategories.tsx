import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    name: "Leather Wallets",
    image:
      "https://images.unsplash.com/photo-1602638034367-26c55969967c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGVhdGhlciUyMFdhbGxldHMlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 2,
    name: "Bracelets",
    image:
      "https://images.unsplash.com/photo-1652169118582-49432bf79172?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnJhY2VsZXRzJTIwaGFuZG1hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 3,
    name: "Handmade Bags",
    image:
      "https://images.unsplash.com/photo-1711548244653-72219aa9ac27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGFuZG1hZGUlMjBCYWdzJTIwaGFuZG1hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    id: 4,
    name: "Decor Items",
    image:
      "https://images.unsplash.com/photo-1759772237984-7dfaf867acc0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fERlY29yJTIwSXRlbXMlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
];

export default function ExploreCategories() {
  return (
    <section className="!py-20 !px-6 md:!px-20 bg-[#fffaf5]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-12 text-center">
        Explore Categories
      </h2>

      <Link
        href={"/explore/"}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="
              relative
              rounded-2xl
              overflow-hidden
              shadow-lg
              cursor-pointer
              group
              transition-transform duration-300
              hover:scale-105 hover:shadow-xl
            "
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/25 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </Link>
    </section>
  );
}
