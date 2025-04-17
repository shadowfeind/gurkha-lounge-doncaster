"use client";

import { useState } from "react";
import type { SubMenu } from "@/types";
import { ChevronDown } from "lucide-react";
import { dishMenu } from "@/menu/menu";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>(
    dishMenu[0].title
  );

  const toggleCategory = (title: string) => {
    setActiveCategory(activeCategory === title ? "" : title);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-center mb-12 font-serif text-amber-800"
        >
          Our Menu
        </motion.h1>

        <div className="space-y-8">
          {dishMenu.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="border border-amber-200 rounded-lg overflow-hidden bg-white shadow-md"
            >
              <motion.button
                whileHover={{ backgroundColor: "rgb(254 243 199)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleCategory(category.title)}
                className="w-full flex justify-between items-center p-4 bg-amber-50 transition-colors"
              >
                <h2 className="text-xl font-semibold text-amber-900 font-serif">
                  {category.title}
                </h2>
                <motion.div
                  animate={{
                    rotate: activeCategory === category.title ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-6 w-6 text-amber-700" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeCategory === category.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {category.special && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="px-4 py-3 bg-amber-100 italic text-amber-800 text-sm"
                      >
                        {category.special}
                      </motion.div>
                    )}

                    <div className="p-4 space-y-4">
                      {category.menu.map((item, index) => (
                        <MenuItem key={index} item={item} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="mt-2 mb-6 flex flex-col justify-center w-full">
        <p className="text-white text-center font-bold">Scan to order online</p>
        <div className="mx-auto mt-2">
          <Image
            src="/images/orderonline.jpeg"
            alt="Feed me online"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

function MenuItem({ item, index }: { item: SubMenu; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        backgroundColor: "rgb(254 243 199)",
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className="flex justify-between border-b border-amber-100 pb-3 p-2 rounded-md transition-colors"
    >
      <div className="flex-1">
        <h3 className="font-medium text-amber-900 group-hover:text-amber-700">
          {item.title}
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
          className="text-gray-600 text-sm mt-1"
        >
          {item.description}
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
        className="ml-4 text-amber-800 font-semibold whitespace-nowrap"
      >
        {typeof item.price === "number"
          ? item.price > 0
            ? `£${item.price.toFixed(2)}`
            : ""
          : `£${item.price}`}
      </motion.div>
    </motion.div>
  );
}
