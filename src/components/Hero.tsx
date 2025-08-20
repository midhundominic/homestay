"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/img_front1.jpeg",
  "/images/img_front2.jpeg",
  "/images/interior.jpeg",
  "/images/living.jpeg",
  "/images/stair4.jpeg",
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
    <div className="relative w-full h-[750px] overflow-hidden">
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
