"use client";

import Image from "next/image";
import Link from "next/link";
import NavMenu from "../nav-menu";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <Image
          src="/images/hero.jpg"
          alt="Fresh baked bread"
          fill
          className="object-cover opacity-90"
          priority
        />
      </div>

      {/* Navigation Menu for desktop */}
      <div className="hidden md:block">
        <NavMenu />
      </div>
      {/* Navigation Menu for mobile */}
      <div className="md:hidden">
        <div className="w-full absolute top-0 z-20 pt-6 flex justify-center items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Gurkha Lounge Logo"
              width={140}
              height={60}
            />
          </Link>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24 bg-black/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-amber-200 text-xl md:text-2xl mb-2">
            Experience the finest flavors of Nepalese and Indian cuisine
          </h2>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            Nepalese &<br />
            Indian Cuisine
          </h1>

          <p className="text-gray-200 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Experience the rich flavors of the Himalayas with our authentic
            Indian and Nepalese cuisine. Every dish is crafted with traditional
            recipes and fresh ingredients.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="#discover"
              className="bg-amber-300 hover:bg-amber-700 text-background px-6 py-3 rounded-full transition-colors"
            >
              View our menu +
            </Link>
            <Link
              href="#menu"
              className="bg-background hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"
            >
              Order takeaway +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
