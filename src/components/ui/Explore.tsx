"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  BedDouble,
  Snowflake,
  Sofa,
  Trees,
  Bath,
  Sunset,
  Flame,
  Utensils,
  Microwave,
  Refrigerator,
  ChefHat,
  Boxes,
  Coffee,
  Tv,
  Wifi,
  BookOpen,
  Lamp,
  Maximize2,
  Sun,
  type LucideIcon,
} from "lucide-react";

// Icon names are plain strings so server components can pass them as props.
export const featureIcons = {
  building: Building2,
  bed: BedDouble,
  snowflake: Snowflake,
  sofa: Sofa,
  trees: Trees,
  bath: Bath,
  sunset: Sunset,
  flame: Flame,
  utensils: Utensils,
  microwave: Microwave,
  refrigerator: Refrigerator,
  chefHat: ChefHat,
  boxes: Boxes,
  coffee: Coffee,
  tv: Tv,
  wifi: Wifi,
  book: BookOpen,
  lamp: Lamp,
  maximize: Maximize2,
  sun: Sun,
} satisfies Record<string, LucideIcon>;

export type FeatureIconName = keyof typeof featureIcons;

export type Feature = {
  icon: FeatureIconName;
  text: string;
};

export type ExploreContent = {
  eyebrow?: string;
  title: string;
  description: string;
  content: string;
  features?: Feature[];
  mainImage: string;
  subImage: string;
};

type ExploreProps = ExploreContent & {
  reverse?: boolean;
  /** Softly tinted background, for alternating section rhythm */
  muted?: boolean;
};

export default function ExploreSection({
  eyebrow,
  title,
  description,
  content,
  features = [],
  mainImage,
  subImage,
  reverse = false,
  muted = false,
}: ExploreProps) {
  return (
    <section
      className={`w-full px-4 py-16 sm:px-6 md:px-12 md:py-24 lg:px-20 ${
        muted ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-10 md:gap-16 md:flex-row ${
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
          {eyebrow && (
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-green-600 to-emerald-400" />

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            {description}
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            {content}
          </p>

          {/* Feature tiles */}
          {features.length > 0 && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <motion.li
                    key={feature.text}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span className="text-sm leading-snug text-gray-700">
                      {feature.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </motion.div>

        {/* Images */}
        <motion.div
          className="relative mt-6 flex w-full justify-center md:mt-0 md:w-1/2"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Decorative glow behind the photos */}
          <div
            aria-hidden
            className={`absolute -top-10 h-48 w-48 rounded-full bg-green-300/30 blur-3xl ${
              reverse ? "-right-8" : "-left-8"
            }`}
          />
          <div
            aria-hidden
            className={`absolute -bottom-12 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl ${
              reverse ? "-left-4" : "-right-4"
            }`}
          />

          {/* Main Image */}
          <motion.div
            className="group relative h-[300px] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 sm:h-[350px] md:h-[420px] lg:h-[480px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={mainImage}
              alt={title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </motion.div>

          {/* Sub Image — overlaps toward the outer edge, away from the text */}
          <motion.div
            className={`absolute bottom-[-24px] w-1/2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:bottom-[-32px] sm:w-2/5 md:bottom-[-40px] ${
              reverse ? "left-3 sm:left-6" : "right-3 sm:right-6"
            } h-[140px] sm:h-[180px] md:h-[220px]`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={subImage}
              alt={`${title} — detail view`}
              fill
              sizes="(min-width: 640px) 20vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
