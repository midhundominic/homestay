"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/images/img_front1.jpeg",
    "/images/img_front2.jpeg",
    "/images/balcony.jpeg",
    "/images/kitchen.jpeg",
    "/images/kitchen.jpeg",
    "/images/room1_new.jpeg",
    "/images/room2.jpeg",
    "/images/stair1.jpeg",
    "/images/stair2.jpeg",
    "/images/stair4.jpeg",
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800"
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-2"
        >
          A glimpse of our property and its surroundings.
        </motion.p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
            >
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-60 hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
