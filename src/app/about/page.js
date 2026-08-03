import TopBar from "../componenets/TopBar";
import Navbar from "../componenets/Navbar";
import AboutPageHeader from "../componenets/about/AboutPageHeader";
import FounderMessage from "../componenets/about/FounderMessage";
import WholesalePartner from "../componenets/about/WholesalePartner";
import DistributionSupplyChain from "../componenets/about/DistributionSupplyChain";
import AboutBrands from "../componenets/about/AboutBrands";
import ImportedExcellence from "../componenets/about/ImportedExcellence";
import AboutStats from "../componenets/about/AboutStats";
import CTABar from "../componenets/CTABar";
import Footer from "../componenets/Footer";

export const metadata = {
  title: "About Us",
  description:
    "Founded by Koyamon Kondadan, K.M. Bakery is Kerala's trusted super stockist with 7 branches, importing premium products from Dubai. Learn our story.",
  alternates: {
    canonical: "https://kmbakery.in/about",
  },
  openGraph: {
    title: "About K.M. Bakery | Kerala's Trusted Wholesale Bakery Distributor",
    description:
      "Founded by Koyamon Kondadan, K.M. Bakery is Kerala's trusted super stockist with 7 branches, importing premium products from Dubai.",
    url: "https://kmbakery.in/about",
    // TODO: point this at your real warehouse/building image path in /public
    images: ["/about/abouthero.png"],
  },
};

function AboutJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: "https://kmbakery.in/about",
    mainEntity: {
      "@type": "Organization",
      name: "K.M. Bakery & Food Product",
      founder: {
        "@type": "Person",
        name: "Koyamon Kondadan",
        jobTitle: "Founder & Chairman",
      },
      description:
        "Kerala's wholesale bakery and food distribution partner, serving retailers, supermarkets, hotels and institutions across Kerala.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <AboutJsonLd />
      <TopBar />
      <Navbar />
      <AboutPageHeader />
      <FounderMessage />
      <WholesalePartner />
      <DistributionSupplyChain />
      <AboutBrands />
      <ImportedExcellence />
      <AboutStats />
      <CTABar />
      <Footer />
    </div>
  );
}

/* ============================================
   IMAGE ALT TEXT
   ============================================
   Warehouse/building exterior photo (AboutPageHeader):
     alt="K.M. Bakery and Food Product warehouse Kerala"

   Founder photo (FounderMessage):
     alt="Koyamon Kondadan, Founder and Chairman of K.M. Bakery"

   Storefront/showroom photo (WholesalePartner):
     alt="K.M. Bakery retail showroom Kerala"

   Kerala branch map graphic (DistributionSupplyChain):
     alt="K.M. Bakery 7 branch locations across Kerala map"

   Sub-brand logos (AboutBrands — intiMate, മധുരിക):
     alt="intiMate premium sub-brand by K.M. Bakery"
     alt="Madhurika sub-brand by K.M. Bakery"

   Dubai import route graphic (ImportedExcellence):
     alt="K.M. Bakery Dubai to Kerala import supply route"
============================================ */