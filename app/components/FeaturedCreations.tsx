import React from "react";

const creations = [
  {
    id: 1,
    title: "Handmade Vase",
    image:
      "https://images.unsplash.com/photo-1631125916276-69bcd14e3980?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFzZSUyMGhhbmRtYWRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    description: "Elegant ceramic vase crafted with care.",
  },
  {
    id: 2,
    title: "Wooden Bowl",
    image:
      "https://images.unsplash.com/photo-1753164725896-f0a39315ff8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvd2wlMjBoYW5kbWFkZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    description: "Smooth polished wooden bowl, perfect for home.",
  },
  {
    id: 3,
    title: "Knitted Scarf",
    image:
      "https://plus.unsplash.com/premium_photo-1682092569123-516bbbf76144?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S25pdHRlZCUyMFNjYXJmJTIwaGFuZG1hZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    description: "Soft, warm scarf made from natural wool.",
  },
];

export default function FeaturedCreations() {
  return (
    <section className="!py-20 !px-6 md:!px-20 bg-[#fefcf9]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-10 text-center">
        Featured Creations
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {creations.map((item) => (
          <div
            key={item.id}
            className="
              relative
              rounded-2xl
              overflow-hidden
              shadow-lg
              hover:shadow-xl
              transition-shadow duration-300
              cursor-pointer
              group
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end !p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
