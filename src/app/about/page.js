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

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
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