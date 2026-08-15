"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
    alt: "Upavan Villa exterior view, Aluva homestay",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629434/WhatsApp_Image_2025-08-23_at_21.24.32_ddgvsn.jpg",
    alt: "Cozy living room in Upavan Villa",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.33_1_aocnax.jpg",
    alt: "Bedroom with comfortable bedding at Upavan Villa Aluva",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629444/WhatsApp_Image_2025-08-23_at_21.26.23_ywg2xv.jpg",
    alt: "Dining area at Upavan Villa homestay",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629456/WhatsApp_Image_2025-08-23_at_21.26.40_pwvtre.jpg",
    alt: "Modern bathroom facilities at Upavan Villa",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629455/WhatsApp_Image_2025-08-23_at_21.26.42_erf8gi.jpg",
    alt: "Garden view from Upavan Villa, a serene Aluva homestay",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.41_ydnk1k.jpg",
    alt: "Spacious kitchen in Upavan Villa for guest use",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629453/WhatsApp_Image_2025-08-23_at_21.26.37_ostzrg.jpg",
    alt: "Interior decor of Upavan Villa, Aluva homestay",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629452/WhatsApp_Image_2025-08-23_at_21.26.36_d2rooh.jpg",
    alt: "Guest bedroom at Upavan Villa with natural light",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg",
    alt: "Exterior of Upavan Villa during daytime",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.24.33_xuc7mi.jpg",
    alt: "Clean and comfortable guest bathroom at Upavan Villa",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.16_1_eyzgaa.jpg",
    alt: "Veranda view at Upavan Villa, perfect for relaxation",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.26.15_1_lsmnn1.jpg",
    alt: "Entrance to Upavan Villa, welcoming homestay in Aluva",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.50_nzufzn.jpg",
    alt: "Garden and pathway leading to Upavan Villa",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629437/WhatsApp_Image_2025-08-23_at_21.25.46_acmfhh.jpg",
    alt: "Living room interior with stylish furniture",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.37_ssgznx.jpg",
    alt: "Exterior facade of Upavan Villa, a charming Aluva homestay",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.44_kow9ml.jpg",
    alt: "Path leading to the entrance of Upavan Villa",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629450/WhatsApp_Image_2025-08-23_at_21.26.32_gvudbe.jpg",
    alt: "Close-up of Upavan Villa exterior details",
  },
];

// Three marquee lanes drifting in alternating directions. Animation class
// strings must stay full literals so Tailwind's scanner picks them up.
const rows: { images: GalleryImage[]; animation: string }[] = [
  {
    images: images.slice(0, 6),
    animation: "animate-[marquee-right_48s_linear_infinite]",
  },
  {
    images: images.slice(6, 12),
    animation: "animate-[marquee-left_56s_linear_infinite]",
  },
  {
    images: images.slice(12, 18),
    animation: "animate-[marquee-right_52s_linear_infinite]",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-gray-50 py-12 scroll-mt-16 md:scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
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
      </div>

      <div className="relative mt-10 space-y-4">
        {/* Edge fades so images dissolve into the background instead of clipping */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent" />

        {rows.map((row, rowIdx) => (
          <motion.div
            key={rowIdx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: rowIdx * 0.15 }}
            viewport={{ once: true }}
            className="group overflow-hidden"
          >
            <div
              className={`flex w-max will-change-transform ${row.animation} group-hover:![animation-play-state:paused] motion-reduce:!animate-none motion-reduce:w-full`}
            >
              {/* Second copy makes the loop seamless; hidden from a11y tree.
                  Under prefers-reduced-motion the lane becomes a static wrapped grid. */}
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? "dup" : "main"}
                  aria-hidden={isDuplicate || undefined}
                  className={`flex shrink-0 gap-4 pr-4 ${
                    isDuplicate
                      ? "motion-reduce:hidden"
                      : "motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0"
                  }`}
                >
                  {row.images.map((img) => (
                    <div
                      key={img.src}
                      className="overflow-hidden rounded-xl shadow-md"
                    >
                      <Image
                        src={img.src}
                        alt={isDuplicate ? "" : img.alt}
                        width={480}
                        height={320}
                        sizes="(min-width: 768px) 320px, 240px"
                        className="h-40 w-60 sm:h-48 sm:w-72 md:h-56 md:w-80 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
