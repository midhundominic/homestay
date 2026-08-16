import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upavanvilla.com"),
  title: "Upavan Villa - Home Stay Booking in Aluva, Kochi | Near Airport",
  description: "Upavan Villa offers comfortable home stay bookings in Aluva, Kochi — a 2-floor villa with 4 air-conditioned bedrooms and 5 washrooms. Perfect for families and travelers, near Kochi Airport, Aluva Railway Station, and popular attractions.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Upavan Villa",
              description:
                "Upavan Villa is a two-floor homestay villa in Aluva, Ernakulam with 4 air-conditioned bedrooms (2 bedrooms on the ground floor and 2 bedrooms on the upper floor) and 5 washrooms. Near Kochi Airport, Aluva Railway Station, Rajagiri Hospital, and Aluva Mahadeva Temple.",
              numberOfRooms: {
                "@type": "QuantitativeValue",
                value: 4,
                unitText: "bedrooms",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Air conditioning in all 4 bedrooms",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "5 washrooms",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free Wi-Fi",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Free parking",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Fully-equipped kitchen",
                  value: true,
                },
              ],
              image:
                "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Aluva",
                addressRegion: "Ernakulam",
                addressCountry: "India",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "10.12103", // update with real coords
                longitude: "76.34390",
              },
              url: "https://upavanvilla.com",
              telephone: "+91-9946307770",
              sameAs: [
                "https://www.facebook.com/people/Upavan-Villa/61579096177408/",
                "https://www.instagram.com/upavanvilla/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
