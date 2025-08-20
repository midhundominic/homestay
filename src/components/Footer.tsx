"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section id="about">
      <footer className="bg-[#1A1A1A] text-[#CCCCCC] pt-16 pb-8 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold text-[#E8542F] mb-4">
              Contacts
            </h3>
            <p className="text-sm">
              Upavan Villa &quot;CARA 40&quot;, Convent road 1, Thottakkattukara,
              (Paroorkavala ) Velamparambu road, Aluva, Ernakulam District.
              <br />
              India, 683108
            </p>
            <p className="mt-4 text-sm text-[#FDEBC9]">
              reservation@upavanresort.com
              <br />
              +91 9961407770
              <br />
              +91 9946307770
            </p>
          </div>

          {/* Map */}
          <div className="w-full h-full">
            <h3 className="text-lg font-semibold text-[#E8542F] mb-4">Location</h3>
            <div className="rounded-xl overflow-hidden shadow-md w-full h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.9097613011336!2d76.34232963724496!3d10.120611193273598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f18166c9249%3A0xae9144449446463c!2sUpavan%20Villa!5e0!3m2!1sen!2sin!4v1753192624019!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-[#E8542F] mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FDEBC9] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#gallery"
                  scroll={true}
                  className="hover:text-[#FDEBC9] transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-semibold text-[#E8542F] mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/upavanresort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className="text-[#CCCCCC] hover:text-[#FDEBC9] hover:scale-110 transition-transform duration-300"
                  size={28}
                />
              </Link>
              <a
                href="https://www.facebook.com/UpavanResort/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className="text-[#CCCCCC] hover:text-[#FDEBC9] hover:scale-110 transition-transform duration-300"
                  size={28}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 text-center text-sm text-[#999999]">
          © Upavan Villa
        </div>
      </footer>
    </section>
  );
}
