import React from "react";

export default function SignInButton() {
  return (
    <button
      className="
        relative
        flex items-center justify-center
        !py-[10px] !px-[22px]
        rounded-[14px]
        cursor-pointer
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        text-white font-medium
        shadow-[0_4px_30px_rgba(255,255,255,0.1)]
        transition-all duration-300
        hover:bg-white/20
        hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
        active:scale-[0.97]
      "
    >
      Sign In
      <span className="absolute inset-0 rounded-[14px] bg-gradient-to-tr from-white/15 to-transparent pointer-events-none" />
    </button>
  );
}
