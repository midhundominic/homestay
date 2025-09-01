"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Afham Nazar",
    place: "Malappuram, Kerala",
    text: "Upavan Villa is a hidden gem! The rooms were clean and cozy, and the garden view was breathtaking.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    place: "Bangalore, Karnataka",
    text: "We had an amazing weekend here. The hosts were very welcoming.Good Atmosphere ",
    rating: 5,
  },
  {
    name: "Anand Siva",
    place: "Hydrabad",
    text: "The villa is surrounded by greenery and peace. Perfect escape from the city rush.",
    rating: 4,
  },
  {
    name: "Priya Verma",
    place: "Delhi, India",
    text: "One of the best stays I’ve ever had. Comfortable rooms, friendly staff, and the vibes are unmatched!",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function GuestReviewsBg() {
  return (
    <section
      className="relative w-full py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.16_1_eyzgaa.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Guest Reviews</h2>
        <p className="text-lg mb-12">
          Hear what our guests have to say about{" "}
          <span className="font-semibold text-green-300">Upavan Villa</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-gray-800 shadow-xl hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-4 text-left">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.place}</p>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="italic text-gray-700">“{review.text}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
