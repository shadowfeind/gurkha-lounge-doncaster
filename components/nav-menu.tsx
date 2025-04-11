"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navMenu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function NavMenu() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
              {navMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium text-white hover:text-amber-300 transition-colors",
                    pathname === item.href ? "text-amber-300 underline" : ""
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* CTA Button Section */}
          <div className="w-1/4 flex justify-end">
            <a
              href="tel:01302366355"
              className="flex items-center gap-2 bg-amber-300 text-black font-medium px-5 py-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors"
            >
              <div className="p-2 bg-white rounded-2xl">
                <Phone className="size-3" />
              </div>
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
