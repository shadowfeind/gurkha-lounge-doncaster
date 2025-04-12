"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import Decoration from "./decoration";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const ContactUs = () => {
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

  const contactItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + i * 0.1,
      },
    }),
  };

  return (
    <section
      id="contact"
      className="py-16"
      style={{ backgroundColor: "oklch(0.29 0.0185 248.47)" }}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
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
            Find Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-500 mx-auto"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="text-gray-300 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Visit us today to experience the authentic taste of Nepalese and
            Indian cuisine
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-xl h-[400px] md:h-[500px] relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            {/* This is a placeholder for the map - in a real implementation, you would use Google Maps or another map provider */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.7990261402384!2d-1.1242814!3d53.5218726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48790de08c4c7e8d%3A0x9a4fce7c2d62cc0a!2s199%20Carr%20House%20Rd%2C%20Hyde%20Park%2C%20Doncaster%20DN4%205DP!5e0!3m2!1sen!2suk!4v1712669608037!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Location */}
              <motion.div
                className="flex items-start"
                custom={0}
                variants={contactItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(245, 158, 11, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-6 w-6 text-amber-400" />
                </motion.div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Location
                  </h4>
                  <p className="text-gray-300">
                    199 Carr House Road, Doncaster, DN4 5DP
                  </p>
                </div>
              </motion.div>

              {/* Open Hours */}
              <motion.div
                className="flex items-start"
                custom={1}
                variants={contactItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(245, 158, 11, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="h-6 w-6 text-amber-400" />
                </motion.div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Open Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <p className="text-gray-300">Tuesday:</p>
                    <p className="text-gray-300">17:00 - 22:20</p>
                    <p className="text-gray-300">Wednesday:</p>
                    <p className="text-gray-300">17:00 - 22:20</p>
                    <p className="text-gray-300">Thursday:</p>
                    <p className="text-gray-300">17:00 - 22:20</p>
                    <p className="text-gray-300">Friday:</p>
                    <p className="text-gray-300">17:00 - 22:20</p>
                    <p className="text-gray-300">Saturday:</p>
                    <p className="text-gray-300">17:00 - 22:20</p>
                    <p className="text-gray-300">Sunday:</p>
                    <p className="text-gray-300">17:00 - 22:00</p>
                    <p className="text-gray-300">Monday:</p>
                    <p className="text-gray-300">Closed</p>
                  </div>
                </div>
              </motion.div>

              {/* Delivery Hours */}
              {/* <motion.div
                className="flex items-start"
                custom={2}
                variants={contactItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(245, 158, 11, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-amber-400"
                  >
                    <path d="M10 17h4V5H2v12h3" />
                    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                    <path d="M14 17h1" />
                    <circle cx="7.5" cy="17.5" r="2.5" />
                    <circle cx="17.5" cy="17.5" r="2.5" />
                  </svg>
                </motion.div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Delivery Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <p className="text-gray-300">Tuesday:</p>
                    <p className="text-gray-300">17:00 - 22:10</p>
                    <p className="text-gray-300">Wednesday:</p>
                    <p className="text-gray-300">17:00 - 22:10</p>
                    <p className="text-gray-300">Thursday:</p>
                    <p className="text-gray-300">17:00 - 22:10</p>
                    <p className="text-gray-300">Friday:</p>
                    <p className="text-gray-300">17:00 - 22:10</p>
                    <p className="text-gray-300">Saturday:</p>
                    <p className="text-gray-300">17:00 - 22:10</p>
                    <p className="text-gray-300">Sunday:</p>
                    <p className="text-gray-300">17:00 - 21:50</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Contact */}
              <motion.div
                className="flex items-start"
                custom={3}
                variants={contactItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(245, 158, 11, 0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-6 w-6 text-amber-400" />
                </motion.div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Contact
                  </h4>
                  <p className="text-gray-300">01302 366355 - for order</p>
                  <p className="text-gray-300">07417 450433 - for booking</p>
                  <motion.a
                    href="tel:01302366355"
                    className="flex items-center gap-2 bg-amber-300 text-black font-medium px-5 py-3 rounded-full shadow-lg hover:bg-amber-700 transition-colors mt-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-2 bg-white rounded-2xl">
                      <Phone className="size-3" />
                    </div>
                    ORDER NOW
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Decoration />
    </section>
  );
};

export default ContactUs;
