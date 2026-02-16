"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Core Functions", href: "#core-functions" },
  { label: "CloudBox", href: "#cloudbox" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-sm font-[family-name:var(--font-header)]">ie</span>
            </div>
            <span className="text-xl font-bold text-text-main font-[family-name:var(--font-header)]">
              ieComfort
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-hover transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-main hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 border-t border-gray-200/60" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 bg-white/95 backdrop-blur-md space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-text-muted hover:text-accent hover:bg-surface rounded-xl transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mx-4 mt-3 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl text-center hover:bg-accent-hover transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
