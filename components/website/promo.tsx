"use client";

import { Tag } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const PromoSection = () => {
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

  return (
    <section className="py-12 bg-amber-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div
                className="flex-1"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.div
                  className="flex items-center mb-4"
                  variants={itemVariants}
                >
                  <Tag className="h-6 w-6 text-amber-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Special Offers
                  </h3>
                </motion.div>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-amber-600 font-bold">10%</span>
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Dine-in Discount
                      </h4>
                      <p className="text-gray-600">
                        Enjoy 10% off on all food items when you dine in with
                        us.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-amber-600 font-bold">10%</span>
                    </motion.div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Collection Discount
                      </h4>
                      <p className="text-gray-600">
                        Get 10% off on collection orders over £15.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="hidden md:block w-px h-40 bg-gray-200"></div>

              <motion.div
                className="flex-1 text-center md:text-left"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
                  variants={itemVariants}
                >
                  Taste the Authentic
                </motion.h3>
                <motion.p
                  className="text-gray-600 mb-6 "
                  variants={itemVariants}
                >
                  Experience the rich flavors of Nepal and India with our
                  special offers.
                </motion.p>
                <motion.div
                  className="text-gray-600 mb-6 flex justify-center md:justify-start"
                  variants={itemVariants}
                >
                  <Image
                    src="/images/orderonline.jpeg"
                    alt="Feed me online"
                    width={100}
                    height={100}
                    className="mt-4"
                  />
                </motion.div>
                <motion.a
                  href="/menu"
                  className="inline-block px-6 py-3 bg-amber-300 text-black font-medium rounded-full hover:bg-amber-600 transition-colors"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Menu +
                </motion.a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ transformOrigin: "left" }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection;
