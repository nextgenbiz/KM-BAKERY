import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import AboutPageHeader from "./components/AboutPageHeader";
import FounderMessage from "./components/FounderMessage";
import WholesalePartner from "./components/WholesalePartner";
import DistributionSupplyChain from "./components/DistributionSupplyChain";
import AboutBrands from "./components/AboutBrands";
import ImportedExcellence from "./components/ImportedExcellence";
import AboutStats from "./components/AboutStats";
import BecomeDistributionPartner from "./components/BecomeDistributionPartner";
import Footer from "./components/Footer";

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
      <BecomeDistributionPartner />
      <Footer />
    </div>
  );
}
