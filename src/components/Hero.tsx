"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const images = [
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
    alt: "Exterior view of Upavan Villa - A serene homestay in Aluva",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.33_1_aocnax.jpg",
    alt: "Comfortable bedroom in Upavan Villa homestay, Aluva",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629453/WhatsApp_Image_2025-08-23_at_21.26.37_ostzrg.jpg",
    alt: "Lush green garden at Upavan Villa Aluva",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg",
    alt: "Spacious living area in Upavan Villa for family relaxation",
  },
  {
    src: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629440/WhatsApp_Image_2025-08-23_at_21.26.15_x6fsyq.jpg",
    alt: "Dining table set up at Upavan Villa homestay",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHeading, setShowHeading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Image background */}
          <div className="relative w-full h-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>

          {/* Overlay with heading */}
          {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold text-center leading-tight px-4">
              Upavan Villa: Your Serene Home Stay in Aluva, Kochi
            </h1>
          </div> */}
        </div>
      ))}
    </div>
  );
}
