"use client";

import Image from "next/image";
import Decoration from "./decoration";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const featureVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6 + i * 0.1,
      },
    }),
  };

  return (
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-2 text-white"
            variants={itemVariants}
          >
            Our Story
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-300 mx-auto"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Discover the authentic flavors and rich culinary heritage behind
            Gurkha Lounge
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Images */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
              variants={imageVariants}
            >
              <Image
                src="/images/aloo.jpg"
                alt="Inside Gurkha Lounge Restaurant"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl hidden md:block"
              initial={{ x: 20, y: 20, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, y: 0, opacity: 1 }
                  : { x: 20, y: 20, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/images/biryani.jpg"
                alt="Traditional Nepalese Dish"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full overflow-hidden border-4 border-amber-500 shadow-xl hidden md:block"
              initial={{ x: -20, y: -20, opacity: 0 }}
              animate={
                isInView
                  ? { x: 0, y: 0, opacity: 1 }
                  : { x: -20, y: -20, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Image
                src="/images/momo.jpg"
                alt="Spices"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-amber-500 rounded-full text-white text-sm font-medium mb-2"
              variants={itemVariants}
            >
              100% Authentic
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white"
              variants={itemVariants}
            >
              A Taste of the Himalayas in Every Dish
            </motion.h3>

            <motion.p className="text-gray-300" variants={itemVariants}>
              Gurkha Lounge was born from a passion to share the authentic
              flavors of Nepal and India with our community. Our journey began
              when our founder brought his family recipes from the foothills of
              the Himalayas to create a dining experience that honors tradition
              while embracing innovation.
            </motion.p>

            <motion.div
              className="border-l-4 border-amber-500 pl-4 italic text-amber-300"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              &ldquo;Our cuisine tells the story of our heritage – a beautiful
              blend of Nepalese and Indian culinary traditions that have been
              passed down through generations. &ldquo;
            </motion.div>

            <motion.p className="text-gray-300" variants={itemVariants}>
              Every dish at Gurkha Lounge is crafted with care using
              time-honored techniques and the freshest ingredients. Our spices
              are ground in-house daily, and our recipes maintain the perfect
              balance of flavors that make Himalayan cuisine so distinctive and
              beloved around the world.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-6"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-2"
                custom={0}
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M12 3v18"></path>
                    <rect x="4" y="8" width="16" height="12" rx="2"></rect>
                    <path d="M2 20h20"></path>
                  </svg>
                </div>
                <span className="font-medium text-white">
                  Authentic Recipes
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                custom={1}
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <span className="font-medium text-white">
                  Fresh Ingredients
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                custom={2}
                variants={featureVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d="M8.56 2.9A7 7 0 0 1 19 9v4"></path>
                    <path d="M17 22H3c0-3.7 3-6.9 7-6.9 2.7 0 5 1.6 6 4"></path>
                    <path d="M19 17h4"></path>
                    <path d="M21 14v6"></path>
                  </svg>
                </div>
                <span className="font-medium text-white">Family Owned</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <Decoration />
      </div>
    </section>
  );
};
