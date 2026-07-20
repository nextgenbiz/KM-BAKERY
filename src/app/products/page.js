import TopBar from "../componenets/TopBar";
import Navbar from "../componenets/Navbar";
import ProductsHero from "../componenets/product/ProductPageHeader";
import ProductsListing from "../componenets/product/ProductsListing";
import ProductsBottomFeatures from "../componenets/product/ProductsBottomFeatures";
import BulkSupplyCTA from "../componenets/product/BulkSupplyCTA";
import Footer from "../componenets/Footer";

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <ProductsHero />
      <ProductsListing />
      <ProductsBottomFeatures />
      <BulkSupplyCTA />
      <Footer />
    </div>
  );
}