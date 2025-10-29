import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCreations from "./components/FeaturedCreations";
import ExploreCategories from "./components/ExploreCategories";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <FeaturedCreations />
      <ExploreCategories />
      <Footer />
    </div>
  );
}
