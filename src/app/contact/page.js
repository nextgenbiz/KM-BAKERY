import TopBar from "../componenets/TopBar";
import Navbar from "../componenets/Navbar";
import ContactFormSection from "../componenets/ContactFormSection";
import BranchesSection from "../componenets/BranchesSection";
import MapSection from "../componenets/MapSection";
import Footer from "../componenets/Footer";
import ContactPageHeader from "../componenets/ContactPageHeader";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <ContactPageHeader />
      <ContactFormSection />
      <BranchesSection />
      <MapSection />
      <Footer />
    </div>
  );
}