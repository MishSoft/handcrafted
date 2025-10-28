"use client";
import React from "react";
import { Menu } from "lucide-react";
import { useAppContext } from "@/context/Context";

export default function DropNavButton() {
  const { setIsOpenDropMenu, isOpenDropMenu } = useAppContext();

  return (
    <button
      onClick={() => setIsOpenDropMenu(!isOpenDropMenu)}
      aria-label="Toggle menu"
      className={`
        relative flex items-center justify-center
        !p-[10px]
        rounded-[12px]
        cursor-pointer
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-[0_4px_20px_rgba(0,0,0,0.1)]
        transition-all duration-300
        hover:bg-white/20
        hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
        active:scale-[0.95]
      `}
    >
      <Menu
        size={20}
        className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-transform duration-300"
        style={{
          transform: isOpenDropMenu ? "rotate(90deg)" : "rotate(0deg)",
        }}
      />
      <span className="absolute inset-0 rounded-[12px] bg-gradient-to-tr from-white/15 to-transparent pointer-events-none" />
    </button>
  );
}
