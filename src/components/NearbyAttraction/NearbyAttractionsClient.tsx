"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

type Attraction = {
  image: string;
  alt: string;
  title: string;
  distance: string;
  description: string;
};

export default function NearbyAttractionsClient({
  attractions,
}: {
  attractions: Attraction[];
}) {
  return (
    <div className="mt-10 grid grid-cols-1 auto-rows-[250px] gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
      {attractions.map((item, idx) => {
        // Titles are written as "Name – SEO tagline"; show the tagline smaller
        const [name, tagline] = item.title.split("–").map((s) => s.trim());
        const isFeature = idx === 0;

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
            viewport={{ once: true, margin: "-60px" }}
            className={`group relative overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 transition-shadow duration-500 hover:shadow-xl ${
              isFeature ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes={
                isFeature
                  ? "(min-width: 768px) 66vw, 100vw"
                  : "(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              }
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Legibility gradient over the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Distance chip */}
            <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <MapPin size={12} aria-hidden />
              {item.distance} away
            </span>

            {/* Text content pinned to the bottom of the photo */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-left md:p-6">
              <h3 className="mb-2 text-lg font-semibold leading-snug text-white md:text-xl">
                {name}
                {tagline && (
                  <span className="mt-0.5 block text-xs font-normal text-white/75 md:text-sm">
                    {tagline}
                  </span>
                )}
              </h3>
              {/* Description: always visible on touch layouts, revealed on hover from md up */}
              <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                <p className="min-h-0 overflow-hidden text-sm leading-relaxed text-white/85 line-clamp-3 transition-opacity duration-500 md:line-clamp-4 md:opacity-0 md:group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
