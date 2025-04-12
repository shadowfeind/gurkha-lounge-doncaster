"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NavMenu from "../nav-menu";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Fresh baked bread"
          fill
          className="object-cover opacity-90"
          priority
        />
      </motion.div>

      {/* Navigation Menu for desktop */}
      <div className="hidden md:block">
        <NavMenu />
      </div>

      {/* Navigation Menu for mobile */}
      <div className="md:hidden">
        <motion.div
          className="w-full absolute top-0 z-20 pt-6 flex justify-center items-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Gurkha Lounge Logo"
              width={140}
              height={60}
            />
          </Link>
        </motion.div>
      </div>

      {/* Content with staggered animations */}
      <div className="relative z-10 flex h-full flex-col justify-center items-center text-center px-8 md:px-16 lg:px-24 bg-black/60">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-serif text-amber-300 text-xl md:text-2xl mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Experience the finest flavors of Nepalese and Indian cuisine
          </motion.h2>

          <motion.h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nepalese &<br />
            Indian Cuisine
          </motion.h1>

          <motion.p
            className="text-gray-200 text-base md:text-lg mb-10 max-w-xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience the rich flavors of the Himalayas with our authentic
            Indian and Nepalese cuisine. Every dish is crafted with traditional
            recipes and fresh ingredients.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-x-2 gap-y-6 md:gap-x-4 justify-center "
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="tel:07417450433"
                className="bg-amber-300 hover:bg-amber-700 text-background px-6 py-3 rounded-full transition-colors"
              >
                Book Now +
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="tel:01302366355"
                className="bg-background hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                Order Now +
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
