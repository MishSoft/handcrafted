import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="!py-16 !px-8 bg-[#fdf9f5] border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">HandCrafted</h2>
          <p className="!m-0 text-gray-700">
            Unique handmade creations for your home and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-gray-900 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-700 hover:text-gray-900 transition"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="!mt-10 text-center text-gray-500 !m-0 text-sm">
        &copy; {new Date().getFullYear()} HandCrafted. All rights reserved.
      </p>
    </footer>
  );
}
