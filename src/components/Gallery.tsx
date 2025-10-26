"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {

  const images = [

    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629434/WhatsApp_Image_2025-08-23_at_21.24.32_ddgvsn.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.33_1_aocnax.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629444/WhatsApp_Image_2025-08-23_at_21.26.23_ywg2xv.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629456/WhatsApp_Image_2025-08-23_at_21.26.40_pwvtre.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629455/WhatsApp_Image_2025-08-23_at_21.26.42_erf8gi.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.41_ydnk1k.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629453/WhatsApp_Image_2025-08-23_at_21.26.37_ostzrg.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629452/WhatsApp_Image_2025-08-23_at_21.26.36_d2rooh.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.24.33_xuc7mi.jpg",
    // // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.16_1_eyzgaa.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.16_1_eyzgaa.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.26.15_1_lsmnn1.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.50_nzufzn.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629437/WhatsApp_Image_2025-08-23_at_21.25.46_acmfhh.jpg",
    // // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.18_sdjept.jpg",
    // // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.24.34_csahow.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.37_ssgznx.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.44_kow9ml.jpg",
    // "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629450/WhatsApp_Image_2025-08-23_at_21.26.32_gvudbe.jpg",

    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
      alt: "Upavan Villa exterior view, Aluva homestay"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629434/WhatsApp_Image_2025-08-23_at_21.24.32_ddgvsn.jpg",
      alt: "Cozy living room in Upavan Villa"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.33_1_aocnax.jpg",
      alt: "Bedroom with comfortable bedding at Upavan Villa Aluva"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629444/WhatsApp_Image_2025-08-23_at_21.26.23_ywg2xv.jpg",
      alt: "Dining area at Upavan Villa homestay"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629456/WhatsApp_Image_2025-08-23_at_21.26.40_pwvtre.jpg",
      alt: "Modern bathroom facilities at Upavan Villa"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629455/WhatsApp_Image_2025-08-23_at_21.26.42_erf8gi.jpg",
      alt: "Garden view from Upavan Villa, a serene Aluva homestay"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.41_ydnk1k.jpg",
      alt: "Spacious kitchen in Upavan Villa for guest use"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629453/WhatsApp_Image_2025-08-23_at_21.26.37_ostzrg.jpg",
      alt: "Interior decor of Upavan Villa, Aluva homestay"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629452/WhatsApp_Image_2025-08-23_at_21.26.36_d2rooh.jpg",
      alt: "Guest bedroom at Upavan Villa with natural light"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg",
      alt: "Exterior of Upavan Villa during daytime"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.24.33_xuc7mi.jpg",
      alt: "Clean and comfortable guest bathroom at Upavan Villa"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629441/WhatsApp_Image_2025-08-23_at_21.26.16_1_eyzgaa.jpg",
      alt: "Veranda view at Upavan Villa, perfect for relaxation"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629439/WhatsApp_Image_2025-08-23_at_21.26.15_1_lsmnn1.jpg",
      alt: "Entrance to Upavan Villa, welcoming homestay in Aluva"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.50_nzufzn.jpg",
      alt: "Garden and pathway leading to Upavan Villa"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629437/WhatsApp_Image_2025-08-23_at_21.25.46_acmfhh.jpg",
      alt: "Living room interior with stylish furniture"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.37_ssgznx.jpg",
      alt: "Exterior facade of Upavan Villa, a charming Aluva homestay"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629436/WhatsApp_Image_2025-08-23_at_21.24.44_kow9ml.jpg",
      alt: "Path leading to the entrance of Upavan Villa"
    },
    {
      src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629450/WhatsApp_Image_2025-08-23_at_21.26.32_gvudbe.jpg",
      alt: "Close-up of Upavan Villa exterior details"
    },

  ];

  return (
    <section id="gallery" className="bg-gray-50 py-12">
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
                src={src.src}
                alt={src.alt}
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
