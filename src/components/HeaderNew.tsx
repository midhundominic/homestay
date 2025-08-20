"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function HeaderNew() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md backdrop-blur-0"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[60px] md:w-[110px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo3.png"
              alt="Anamala Homestays"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto  max-h-[100px]"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-md font-medium transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-green-600`}
          >
            Home
          </Link>
          <Link
            href="#about"
            className={`text-md font-medium transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-green-600`}
          >
            About
          </Link>

          <Link
            href="#gallery"
            scroll={true}
            className={`text-md font-medium transition-colors ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-green-600`}
          >
            Gallery
          </Link>
          <div className=" md:block pb-1">
            <Button
              text="Book Now"
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            />
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
