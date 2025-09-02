import Hero from "@/components/Hero";
import AboutAndFacilities from "@/components/Facility";
import Gallery from "@/components/Gallery";
import NearbyAttraction from "@/components/NearbyAttraction"
import HeaderNew from "@/components/Header";
import HeroNew from "@/components/HeroNew"
import Reviews from "@/components/Reviews";
import HeroFlip from "@/components/HeroFlip"
import { Metadata } from "next"


import Footer from "@/components/Footer";

export const metadata = {
  title: "Upavan Villa - homestay in Aluva,Ernakulam",
  description:
    "Upavan Villa is a peaceful homestay in Aluva, Ernakulam. Close to Aluva Railway Station, Kochi International Airport, Rajagiri Hospital, Aluva Mahadeva Temple, and CIAL Convention Centre.",
  keywords: [
    "Upavan Villa",
    "Aluva homestay",
    "Ernakulam homestay",
    "homestay near Kochi Airport",
    "Rajagiri Hospital stay",
    "Aluva Shiva Shetram stay",
    "CIAL convention centre accommodation",
  ],
  openGraph: {
    title: "Upavan Villa - Premium Homestay in Aluva, Ernakulam",
    description:
      "Stay at Upavan Villa homestay in Aluva, Ernakulam – near Kochi International Airport, Aluva Railway Station, Rajagiri Hospital, and CIAL convention centre.",
    url: "https://yourdomain.com",
    images: [
      {
        url: "https://res.cloudinary.com/djdjfhkie/image/upload/v1756629445/WhatsApp_Image_2025-08-23_at_21.26.20_qbsqof.jpg",
        width: 1200,
        height: 630,
        alt: "Upavan Villa Homestay in Aluva, Ernakulam",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
    <main className="flex-grow">
      <HeaderNew/>
      {/* <Header/> */}
      <Hero/>
      <AboutAndFacilities/>
      <HeroNew/>
      <HeroFlip/>
      <Reviews/>
      <Gallery/>
      <NearbyAttraction/>

    
    </main>
    <Footer/>
    </>
  );
}
