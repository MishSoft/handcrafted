"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0, scale: 0.98 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      // note: use a translucent bg + explicit -webkit-backdrop-filter for safari
      style={{
        WebkitBackdropFilter: "blur(14px)",
        backdropFilter: "blur(14px)",
        background: "rgba(244,232,220,0.58)", // slightly warm translucent bg
        // optional: if you still have stacking issues, try isolation
        // isolation: "isolate",
      }}
      className={`
        fixed top-[20px] left-1/2 -translate-x-1/2
        w-[90%] max-w-[380px]
        rounded-[20px]
        !py-10
        border border-white/20
        shadow-[0_8px_32px_rgba(0,0,0,0.15)]
        z-[9998]
      `}
    >
      <ul className="flex flex-col items-center justify-center gap-8 text-[18px] font-medium text-[#3b3025]">
        {links.map((link) => (
          <motion.div
            key={link.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href={link.href}
              className="relative transition-all duration-300
                after:absolute after:content-[''] after:left-1/2 after:bottom-[-4px]
                after:translate-x-[-50%] after:h-[2px] after:bg-[#3b3025]/40
                after:rounded-full after:w-0 hover:after:w-3/4"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </ul>
    </motion.nav>
  );
}
