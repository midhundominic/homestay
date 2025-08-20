"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function NearbyAttractions() {
  const attractions = [
    {
      title: "Areekkal Waterfalls",
      distance: "2 km",
      description:
        "Areekkal or Areeckal Waterfalls, located amidst the peaceful environments of Piravom, Kerala, is a natural beauty waiting to be explored. This perennial wonder is known for its cascading waters, creating a destination that incites peace for lovers of nature and adventure seekers. Areekkal Waterfalls, situated in the western part of Kerala, offers a serene place with a pleasant view. Usually, it is through the countryside that the traveller reaches this fall, and en route gets to see the best of Kerala’s rural lustre and natural wealth.",
      image: "/images/attractions/areekalwaterfalls.jpg",
    },
    {
      title: "Varikkasseri Mana",
      distance: "15 km",
      description:
        "A traditional Kerala–style ancestral home, showcasing the region's architectural grandeur and cultural significance.",
      image: "/images/attractions/cherayibeach.jpg",
    },
    {
      title: "Killikurissy Mana",
      distance: "6 km",
      description:
        "A memorial dedicated to Kunjan Nambiar, the father of Malayalam satire, often associated with cultural heritage.",
      image: "/images/attractions/Hillpalacemuseum.jpg",
    },
    {
      title: "Punarjani Cave",
      distance: "7 km",
      description:
        "A 150–meter–long cave linked to the 'noozal' ritual, believed to offer spiritual rebirth to visitors.",
      image: "/images/attractions/paniyeli.jpg",
    },
    {
      title: "Ivor Madam (Parthasarathy Temple)",
      distance: "3 km",
      description:
        "A peaceful temple dedicated to Lord Parthasarathy, offering a serene environment for spiritual reflection.",
      image: "/images/attractions/ivormadam.jpg",
    },
    {
      title: "Kuthampully Handloom Village",
      distance: "3 km",
      description:
        "Famous for its traditional handwoven kasavu sarees, offering insight into Kerala’s weaving heritage.",
      image: "/images/attractions/kuthampully.jpg",
    },
    
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800"
        >
          Nearby Attractions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-2"
        >
          Explore nearby attractions and convenient travel options around our property.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {attractions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-5 h-56 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-green-600 mt-1">Distance: {item.distance}</p>
                <p className="text-gray-600 text-sm mt-2 flex-grow">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
