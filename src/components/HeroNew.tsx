import React from "react";

export default function ScrollIllusionSection() {
  return (
    <div className="w-full">
      {/* Top white section */}
      {/* <section className="h-[80vh] bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">Welcome to Our Homestay</h1>
      </section> */}

      {/* Center fixed background section */}
      <section
        className="relative h-[70vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/djdjfhkie/image/upload/v1756629453/WhatsApp_Image_2025-08-23_at_21.26.37_ostzrg.jpg')" }}
      >
        {/* Overlay for text readability */}
        <div className="bg-black/40 p-6 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Stay With Comfort</h2>
          <p className="text-lg text-gray-200 max-w-xl text-center">
            Experience nature, peace, and the warmth of home. Scroll to explore more about our homestay.
          </p>
        </div>
      </section>

      {/* Bottom white section */}
      {/* <section className="h-[80vh] bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-700">Discover Our Spaces</h1>
      </section> */}
    </div>
  );
}
