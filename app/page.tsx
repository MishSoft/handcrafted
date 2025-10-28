import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCreations from "./components/FeaturedCreations";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <FeaturedCreations />
    </div>
  );
}
