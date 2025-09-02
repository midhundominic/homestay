"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[50px] md:w-[100px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo3.png"
              alt="Upavan Villa"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto max-h-[100px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
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
          <Link
            href="#contact"
            scroll={true}
            className={`text-md font-medium transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            } hover:text-green-600`}
          >
            Contact
          </Link>

          {/* Contact Info (desktop only) */}
          <div className="flex gap-10 text-sm text-green-600">
      
            <a href="tel:+919946307770" className="flex items-center gap-1">
              <Phone size={16} /> +91 9946307770
            </a>
        
            <a
              href="mailto:upavanvilla@gmail.com"
              className="flex items-center gap-1"
            >
              <Mail size={16} /> upavanvilla@gmail.com
            </a>
          </div>

          <Button
            text="Book Now"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          />
        </nav>

        {/* Right Side (mobile only) */}
        <div className="flex items-center gap-3 md:hidden">
          <Button
            text="Book Now"
            className="bg-green-600 text-white px-3 py-1 rounded-full text-sm"
          />
          <button
            className="text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-[60px] left-0 w-full bg-white z-40 px-6 py-6 overflow-y-auto h-[calc(100vh-70px)] md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="#gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              {/* Contact Info in mobile menu */}
              <div className="mt-6 flex flex-col gap-2 text-green-600 text-base">
                <a href="tel:+911234567890" className="flex items-center gap-2">
                  <Phone size={18} /> +91 12345 67890
                </a>
                <a
                  href="mailto:info@upavanvilla.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={18} /> info@upavanvilla.com
                </a>
              </div>

              {/* Book Now inside mobile menu */}
              <div className="mt-6">
                <Button
                  text="Book Now"
                  className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
                />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
