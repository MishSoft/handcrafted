"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },

  {
    id: 2,
    label: "Explore",
    href: "/explore",
  },

  {
    id: 3,
    label: "Create",
    href: "/create",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="md:flex items-center gap-5 hidden">
      {links.map((item) => {
        return (
          <Link
            className={`text-md ${
              pathname?.startsWith(item.href) ? "after:w-full" : ""
            } font-semibold relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:left-0 after:bottom-0 after:duration-200`}
            key={item.id}
            href={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
