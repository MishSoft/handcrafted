"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        rounded-full
        !px-8 !py-3
        shadow-[0_4px_20px_rgba(255,255,255,0.08)]
      "
    >
      <ul className="flex items-center gap-8 text-[15px] font-medium text-white/80">
        {links.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`
                relative transition-all duration-300
                hover:text-white
                ${isActive ? "text-white" : ""}
                after:absolute after:content-[''] after:left-1/2 after:bottom-[-4px]
                after:translate-x-[-50%] after:rounded-full
                after:h-[2px] after:bg-white after:transition-all after:duration-300
                ${isActive ? "after:w-3/4" : "after:w-0 hover:after:w-3/4"}
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
