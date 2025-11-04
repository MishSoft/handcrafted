"use client";
import Hero from "./components/Hero";
import FeaturedCreations from "./components/FeaturedCreations";
import ExploreCategories from "./components/ExploreCategories";
import { useAppContext } from "@/context/Context";
import SignIn from "./components/SignIn";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const { isLogin } = useAppContext();
  return (
    <div className="relative">
      <Header />
      <Hero />
      <FeaturedCreations />
      <ExploreCategories />
      {isLogin && <SignIn />}
      <Footer />
    </div>
  );
}
