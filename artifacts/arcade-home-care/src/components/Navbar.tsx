'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Benefits", href: "/#benefits" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-28 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/arcade-logo.png"
                alt="Arcade Home Care LLC Logo"
                className="h-20 w-20 md:h-24 md:w-24 object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-[#1E6FB8] font-extrabold text-lg md:text-xl leading-tight">ARCADE</p>
                <p className="text-gray-800 font-extrabold text-lg md:text-xl leading-tight">HOME CARE</p>
                <p className="text-gray-600 font-bold text-sm leading-tight">LLC</p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#1E6FB8] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+19255750709"
              className="bg-[#2FAE66] hover:bg-[#26964f] text-white font-bold rounded-full px-6 py-3 text-sm transition-colors shadow-md shadow-green-200"
            >
              Call (925) 575-0709
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-[#1E6FB8] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-gray-800 hover:text-[#1E6FB8] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="tel:+19255750709"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#2FAE66] hover:bg-[#26964f] text-white font-bold rounded-full px-6 py-3 text-sm transition-colors"
              >
                Call (925) 575-0709
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
