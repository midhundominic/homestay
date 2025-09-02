"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ExploreProps = {
  title: string;
  description: string;
  content: string;
  features?: string[];
  mainImage: string;
  subImage: string;
  reverse?: boolean;
};

export default function ExploreSection({
  title,
  description,
  content,
  features = [],
  mainImage,
  subImage,
  reverse = false,
}: ExploreProps) {
  return (
    <section
      className={`w-full bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C4452F] mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#333333] mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>
        <p className="text-base sm:text-lg md:text-xl text-[#444444] leading-relaxed">
          {content}
        </p>

        {/* Features list */}
        {features.length > 0 && (
          <motion.ul
            className="list-disc list-inside text-[#3E7C47] mt-4 sm:mt-6 space-y-1 sm:space-y-2 text-base sm:text-lg md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>

      {/* Images */}
      <motion.div
        className="w-full md:w-1/2 relative flex justify-center mt-6 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main Image */}
        <motion.div
          className="relative w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[480px] rounded-2xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image src={mainImage} alt="Main view" fill className="object-cover" />
        </motion.div>

        {/* Sub Image */}
        <motion.div
          className="absolute bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] right-3 sm:right-6 w-1/2 sm:w-2/5 h-[140px] sm:h-[180px] md:h-[220px] rounded-xl shadow-xl border-4 border-white overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image src={subImage} alt="Sub view" fill className="object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}
