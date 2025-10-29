"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useAppContext } from "@/context/Context";
import DropNavButton from "./DropNavButton";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import SearchBtn from "./SearchBtn";
import SingInButton from "./SingInButton";

export default function Header() {
  const { isOpenDropMenu, setIsOpenDropMenu } = useAppContext();
  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // initial state only once
  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { opacity: 0, y: -50, pointerEvents: "none" });
    }
  }, []);

  // toggle animation
  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        opacity: isOpenDropMenu ? 1 : 0,
        y: isOpenDropMenu ? 0 : -50,
        duration: 0.5,
        ease: "power2.inOut",
        pointerEvents: isOpenDropMenu ? "auto" : "none",
      });
    }
  }, [isOpenDropMenu]);

  // outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        headerRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpenDropMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenDropMenu]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full
    z-[9999]
    flex items-center justify-between
    !px-8 !py-4
    backdrop-blur-xl
    bg-white/5
    border-b border-white/10
    shadow-[0_4px_30px_rgba(0,0,0,0.1)]
    transition-all duration-500
    supports-[backdrop-filter]:backdrop-saturate-150"
    >
      <div className="md:hidden">
        <DropNavButton />
      </div>

      <Link href={"/"}>
        <h1
          className="
      text-2xl font-semibold tracking-tight
      text-white
      bg-clip-text 
      bg-gradient-to-r from-black via-black/90 to-black/60
      drop-shadow-[0_1px_6px_rgba(255,255,255,0.15)]
      hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
      transition-all duration-300
    "
        >
          HandCrafted
        </h1>
      </Link>

      <div className="md:flex items-center gap-[32px] hidden">
        <Nav />
        <div className="flex items-center gap-[8px]">
          <SingInButton />
          <SearchBtn />
        </div>
      </div>
      <div className="md:hidden">
        <SearchBtn />
      </div>

      <div ref={navRef} className="absolute top-full left-0 w-full z-50">
        <MobileNav />
      </div>
    </header>
  );
}
