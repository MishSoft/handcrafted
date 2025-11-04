"use client";
import React, { useState, useEffect, useRef } from "react";
import { UserRound, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { easeOut } from "framer-motion";
import { useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    label: "Profile",
    path: "/profile",
    icon: <User size={16} />,
  },
  {
    id: 2,
    label: "Settings",
    path: "/settings",
    icon: <Settings size={16} />,
  },
];

export default function Profile() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogOut = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/");
  };

  // Outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: easeOut },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <div ref={menuRef} className="relative !text-gray-600">
      {/* Avatar / Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center border rounded-full !p-2 hover:!text-gray-900 hover:border-gray-900 transition duration-200"
      >
        <UserRound size={20} />
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-12 w-[220px] bg-white shadow-lg rounded-xl !p-3 flex flex-col gap-2 border border-gray-100 z-50"
          >
            {links.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:!text-black hover:!bg-gray-50 transition-all duration-150 rounded-lg !px-3 !py-2"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            <hr className="my-1 border-gray-200" />

            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 text-red-500 hover:!bg-red-50 transition-all duration-150 rounded-lg !px-3 !py-2"
            >
              <LogOut size={16} />
              <span>Log out</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
