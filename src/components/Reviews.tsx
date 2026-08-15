"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
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
    text: "We had an amazing weekend here. The hosts were very welcoming. Good atmosphere.",
    rating: 5,
  },
  {
    name: "Anand Siva",
    place: "Hyderabad",
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

const avatarGradients = [
  "from-green-500 to-emerald-700",
  "from-amber-500 to-orange-700",
  "from-sky-500 to-blue-700",
  "from-rose-500 to-pink-700",
];

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function GuestReviews() {
  const average =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Photo backdrop (next/image instead of bg-fixed, which breaks on iOS) */}
      <Image
        src="https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.16_1_eyzgaa.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75" />

      <div className="relative mx-auto max-w-6xl px-4 text-center text-white md:px-6">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
          Testimonials
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Guest Reviews
        </h2>

        {/* Aggregate rating */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.round(average)
                    ? "fill-amber-400 text-amber-400"
                    : "text-white/30"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-white/80">
            <span className="font-semibold text-white">
              {average.toFixed(1)}
            </span>{" "}
            out of 5 · rated by our guests
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mb-10 md:grid-cols-2 md:gap-8">
          {reviews.map((review, index) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl border border-white/15 bg-white/10 p-6 text-left shadow-lg backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:bg-white/15 md:p-7 md:even:translate-y-10"
            >
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-white/15"
                aria-hidden
              />

              {/* Star rating (filled + empty out of 5) */}
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-white/30"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
                “{review.text}”
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white ${
                    avatarGradients[index % avatarGradients.length]
                  }`}
                >
                  {initialsOf(review.name)}
                </span>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/60">{review.place}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
