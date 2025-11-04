"use client";
import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import Profile from "./Profile";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import { useDashboardContext } from "../context/DashboardContext";

export default function Header() {
  const { setIsOpenDropMenu, isOpenDropMenu } = useDashboardContext();
  return (
    <header
      onClick={() => setIsOpenDropMenu(!isOpenDropMenu)}
      className="!px-10 relative !py-5 flex items-center justify-between border-b border-gray-300 shadow-xl"
    >
      <button className="md:hidden">
        <Menu />
      </button>
      <Link href={"/"}>
        <h1 className="text-2xl font-semibold">HandCrafted</h1>
      </Link>

      <div className="flex items-center gap-10">
        <Nav />
        <Profile />
      </div>

      <MobileNav />
    </header>
  );
}
