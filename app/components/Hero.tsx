import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/content.jpeg"
        alt="Handmade items"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay for softness */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] tracking-tight">
          HandCrafted with Love
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-xl">
          Discover unique, handmade creations that tell a story — crafted by
          artisans who pour their heart into every detail.
        </p>

        <button
          className="
            !mt-10
            !px-6 !py-3
            rounded-full
            font-medium
            text-white
            bg-white/10
            border border-white/20
            backdrop-blur-xl
            hover:bg-white/20
            hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
            active:scale-[0.97]
            transition-all duration-300
          "
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
}
