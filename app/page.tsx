"use client";
import Hero from "./components/Hero";
import FeaturedCreations from "./components/FeaturedCreations";
import ExploreCategories from "./components/ExploreCategories";
import { useAppContext } from "@/context/Context";
import SignIn from "./components/SignIn";

export default function Home() {
  const { isLogin } = useAppContext();
  return (
    <div className="relative">
      <Hero />
      <FeaturedCreations />
      <ExploreCategories />
      {isLogin && <SignIn />}
    </div>
  );
}
