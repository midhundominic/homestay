"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function Button({
  text = "Book Now",
  className,
}: {
  text?: string;
  className?: string;
}) {
  const [showModal, setShowModal] = useState(false);

  const handleNavigation=()=>{
    window.open("https://www.makemytrip.com/hotels/upavan_villa-details-cochin.html")

  }

  return (
    <>
      <button
      onClick={handleNavigation}
        // onClick={() => setShowModal(true)}
        className={`px-6 py-3 rounded-xl font-semibold text-base text-white bg-green-600 hover:scale-105 transition-all duration-300 ${className}`}
      >
        {text}
      </button>

      {showModal && <ContactUs onClose={() => setShowModal(false)} />}
    </>
  );
}

function ContactUs({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      await Promise.all([
        fetch("https://formsubmit.co/midhundominic2002@gmail.com", {
          method: "POST",
          body: formData,
        }),
        fetch("https://formsubmit.co/midhunmicrosoft@gmail.com", {
          method: "POST",
          body: formData,
        }),
      ]);
  
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999999] px-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-[#d1452a] text-2xl transition-colors"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6 text-center text-[#d1452a]">Book Now</h2>

        {submitted ? (
          <div className="text-center py-12 text-green-600 font-medium text-xl">
            We will connect you shortly...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-[#d1452a] focus:outline-none transition-colors placeholder-gray-400 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-[#d1452a] focus:outline-none transition-colors placeholder-gray-400 text-black"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-[#d1452a] focus:outline-none transition-colors placeholder-gray-400 text-black"
            />

            <div className="text-sm text-gray-600 mt-4 space-y-2 bg-gray-50 p-4 rounded-lg">
              <p className="flex items-center gap-2">
                <span className="text-[#d1452a]">📞</span>
                <span>Phone: <span className="font-semibold text-[#d1452a]">996140770</span></span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#d1452a]">✉️</span>
                <span>Email: <span className="font-semibold text-[#d1452a]">reservation@gmail.com</span></span>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#d1452a] text-white py-3 rounded-lg hover:bg-[#b83a22] transition-colors disabled:opacity-50 font-semibold text-lg"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );

  // Use React Portal to render modal at document body level
  if (typeof window !== 'undefined') {
    return createPortal(modalContent, document.body);
  }

  return null;
}
