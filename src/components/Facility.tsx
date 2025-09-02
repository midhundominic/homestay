"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AirVent,
  Bath,
  Coffee,
  Home,
  ParkingSquare,
  Wifi,
  Feather,
  Baby,
  Waves,
  Sofa,
  Train,
  PawPrint,
  Newspaper,
  ShowerHead,
  Luggage,
  CctvIcon,
  Shield,
} from "lucide-react";

export default function AboutAndFacilities() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facilities = [
    { icon: Wifi, label: "Free Wifi", category: "General" },
    { icon: ParkingSquare, label: "Free Parking", category: "General" },
    { icon: Home, label: "Family rooms", category: "General" },
    { icon: AirVent, label: "Air conditioning", category: "General" },
    { icon: Newspaper, label: "News Paper", category: "General" },
    { icon: Luggage, label: "Luggage Assistance ", category: "General" },
    { icon: Shield, label: "24/7 Security", category: "General" },
    { icon: ShowerHead, label: "Seperate Drivers Room", category: "Room Amenities" },
    { icon: Sofa, label: "Fully furnished", category: "Room Amenities" },
    { icon: Baby, label: "Kids Play Area", category: "Activities" },
    { icon: Waves, label: "First-aid Services", category: "Health & Wellness" },
    { icon: CctvIcon, label: "CCTV", category: "Safety and Security" },
    { icon: Feather, label: "Housekeeping", category: "General" },
    { icon: PawPrint, label: "Pets Friendly", category: "General" },
    { icon: Train, label: "Paid Railway Station Transfers", category: "General" },
  ];

  const categories = Array.from(new Set(facilities.map((f) => f.category)));

  return (
    <section className="bg-gray-50 py-12">
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-xl p-6"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-gray-800">Welcome to Upavan Villa</h2>
          <p className="text-gray-500 mt-1">About Us</p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Nestled in the serene town of Aluva, Upavan Villa offers a tranquil retreat that blends
            traditional Kerala architecture with modern comforts. Located just 9.4 km from Cochin
            International Airport and approximately 4 km Railway Station, our homestay provides easy
            access to major transportation hubs, making it an ideal choice for travelers seeking
            convenience and comfort
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/images/img_front1.jpeg"
            alt="Homestay view"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* Facilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h3 className="text-2xl font-bold text-gray-800">Popular Facilities</h3>
        <p className="text-gray-500 mt-1">Explore the most loved facilities offered by our property.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
          {facilities.slice(0, 8).map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-700 justify-center bg-white py-2 px-4 rounded-lg shadow hover:shadow-md transition"
            >
              <facility.icon size={20} />
              <span className="text-sm">{facility.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="mt-8 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          All Facilities →
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)} // ✅ close when clicking outside
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()} // ✅ prevent closing when clicking inside
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              <h3 className="text-black text-xl font-bold text-center mb-6">All Facilities</h3>
              <div className="space-y-6">
                {categories.map((category) => (
                  <div key={category}>
                    <h4 className="font-bold text-gray-800 mb-2">{category}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {facilities
                        .filter((f) => f.category === category)
                        .map((facility, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-700">
                            <facility.icon size={20} />
                            <span>{facility.label}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
