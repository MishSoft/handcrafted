"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex items-center gap-10">
        {links.map((item, index) => {
          return (
            <Link
              className={`${
                pathname === item.href ? "after:w-full" : "after:w-0"
              } relative after:absolute after:content-[''] after:left-[50%] after:bottom-0  after:translate-x-[-50%]  after:rounded-full after:h-[2.5px] after:bg-gray-700 after:transition-all after:duration-200 hover:after:w-full`}
              key={index}
              href={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
