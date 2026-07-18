import TopBar from "./componenets/TopBar";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import StatsBar from "./componenets/StatsBar";
import ProductRange from "./componenets/ProductRange";
import AboutSection from "./componenets/AboutSection";
import GlobalSources from "./componenets/GlobalSources";
import CTABar from "./componenets/CTABar";
import Footer from "./componenets/Footer";
import BrandPartners from "./componenets/BrandPartners";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <StatsBar />
      <BrandPartners/>
      <ProductRange />
      <AboutSection />
      <GlobalSources />
      <CTABar />
      <Footer />
    </div>
  );
}
