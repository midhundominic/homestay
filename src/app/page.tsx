import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutAndFacilities from "@/components/Facility";
import Gallery from "@/components/Gallery";
import NearbyAttraction from "@/components/NearbyAttraction"
import HeaderNew from "@/components/HeaderNew";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main className="flex-grow">
      <HeaderNew/>
      {/* <Header/> */}
      <Hero/>
      <AboutAndFacilities/>
      <Gallery/>
      <NearbyAttraction/>

    
    </main>
    <Footer/>
    </>
  );
}
