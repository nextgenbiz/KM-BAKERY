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

export const metadata = {
  title: "K.M. Bakery & Food Product | Wholesale Bakery Distributor Kerala",
  description:
    "Kerala's trusted wholesale bakery & food distributor. Super stockist for 50+ brands, importer from Dubai. 7 branches across Kerala. Get a quote today.",
  alternates: {
    canonical: "https://kmbakery.in",
  },
  openGraph: {
    title: "K.M. Bakery & Food Product | Wholesale Bakery Distributor Kerala",
    description:
      "Kerala's trusted wholesale bakery & food distributor. Super stockist for 50+ brands, importer from Dubai. 7 branches across Kerala.",
    url: "https://kmbakery.in",
    // TODO: point this at your real hero image path in /public
    images: ["/hero2.webp"],
  },
};

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

/* ============================================
   IMAGE ALT TEXT — apply to the <Image alt="..." /> props
   inside Hero, StatsBar, BrandPartners, ProductRange,
   AboutSection and GlobalSources components
   ============================================
   Hero product basket image:
     alt="Wholesale bakery and imported food products by K.M. Bakery Kerala"

   Brand logos (BakeMate, Hugs, American Snacks, Kamco, Glacier, Roja):
     alt="BakeMate biscuits wholesale supplier Kerala"
     alt="Hugs chocolates and candies wholesale Kerala"
     alt="American Snacks wholesale distributor Kerala"
     alt="Kamco brand wholesale supplier Kerala"
     alt="Glacier chocolates wholesale Kerala"
     alt="Roja food products wholesale Kerala"

   Product range icons:
     alt="Wholesale chocolates supplier Kerala"
     alt="Wholesale biscuits supplier Kerala"
     alt="Wholesale cakes supplier Kerala"
     alt="Wholesale chips and snacks supplier Kerala"
     alt="Bakery gift items wholesale Kerala"
     alt="Traditional Indian sweets wholesale Kerala"
     alt="Wholesale ice creams supplier Kerala"
     alt="Flavoured carbonated drinks wholesale Kerala"

   Storefront photo (Malappuram) in AboutSection:
     alt="K.M. Bakery and Food Product store, Malappuram Kerala"

   Dubai / Mumbai / Delhi images in GlobalSources:
     alt="K.M. Bakery sourcing hub Dubai"
     alt="K.M. Bakery sourcing hub Mumbai"
     alt="K.M. Bakery sourcing hub Delhi"
============================================ */