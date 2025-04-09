"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Phone } from "lucide-react";

export default function NavMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`w-full absolute top-0 z-20 ${
        scrolled
          ? "fixed bg-black/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="w-1/4">
            {scrolled ? (
              <span className="text-xl font-bold text-white">
                Gurkha Lounge
              </span>
            ) : (
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Gurkha Lounge Logo"
                  width={120}
                  height={40}
                />
              </Link>
            )}
          </div>

          {/* Navigation Links - Centered */}
          <nav className="flex items-center justify-center w-2/4">
            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="/"
                className="text-base font-medium text-white hover:text-amber-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="text-base font-medium text-white hover:text-amber-300 transition-colors"
              >
                Menu
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-white hover:text-amber-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* CTA Button Section */}
          <div className="w-1/4 flex justify-end">
            <button className="flex items-center gap-2 bg-amber-300 text-black font-medium px-5 py-3 rounded-full shadow-lg hover:bg-amber-300 transition-colors">
              <div className="p-2 bg-white rounded-2xl">
                <Phone className="size-3" />
              </div>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
