"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { url } from "inspector";

const images = [
  "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
  "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629454/WhatsApp_Image_2025-08-23_at_21.26.33_1_aocnax.jpg",
  "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629453/WhatsApp_Image_2025-08-23_at_21.26.37_ostzrg.jpg",
  "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629447/WhatsApp_Image_2025-08-23_at_21.26.25_t5k77z.jpg",
  "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629440/WhatsApp_Image_2025-08-23_at_21.26.15_x6fsyq.jpg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[750px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
