"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Attraction = {
  image: string;
  alt: string;
  title: string;
  distance: string;
  description: string;
};

export default function NearbyAttractionsClient({ attractions }: { attractions: Attraction[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {attractions.map((item, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative w-full h-48">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5 h-64 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-green-600 mt-1">Distance: {item.distance}</p>
            <p className="text-gray-600 text-sm mt-2 flex-grow">{item.description}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
