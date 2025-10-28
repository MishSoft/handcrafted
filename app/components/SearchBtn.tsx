import React from "react";
import { Search } from "lucide-react";

export default function SearchBtn() {
  return (
    <button
      className="
        relative
        flex items-center justify-center
        !p-[10px]
        rounded-[12px]
        cursor-pointer
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        shadow-[0_4px_30px_rgba(255,255,255,0.1)]
        transition-all duration-300
        hover:bg-white/20
        hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]
        active:scale-[0.95]
      "
    >
      <Search
        size={18}
        className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
      />
      <span className="absolute inset-0 rounded-[12px] bg-gradient-to-tr from-white/15 to-transparent pointer-events-none" />
    </button>
  );
}
