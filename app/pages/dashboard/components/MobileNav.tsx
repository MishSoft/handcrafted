"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useDashboardContext } from "../context/DashboardContext";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Explore", href: "/explore" },
  { id: 3, label: "Create", href: "/create" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { isOpenDropMenu } = useDashboardContext();

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.3 },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {!isOpenDropMenu && (
        <motion.div
          className="absolute z-[999999] overflow-hidden top-full left-0 w-full min-h-screen bg-gray-100/20 backdrop-blur-2xl md:hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={navVariants}
        >
          <nav className="bg-white h-full shadow-2xl min-h-[400px] !p-5 flex flex-col items-center justify-center gap-5">
            {links.map((item) => (
              <motion.div key={item.id} variants={linkVariants}>
                <Link
                  href={item.href}
                  className={`relative text-md font-semibold after:absolute after:content-[''] after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:left-0 after:bottom-0 after:duration-300 ${
                    pathname?.startsWith(item.href) ? "after:w-full" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
