import TopBar from "../componenets/TopBar";
import Navbar from "../componenets/Navbar";
import ProductsHero from "../componenets/product/ProductPageHeader";
import ProductsListing from "../componenets/product/ProductsListing";
import ProductsBottomFeatures from "../componenets/product/ProductsBottomFeatures";
import BulkSupplyCTA from "../componenets/product/BulkSupplyCTA";
import Footer from "../componenets/Footer";
import BrandPartners from "../componenets/product/Logos";

export const metadata = {
  title: "Products",
  description:
    "Browse our wholesale range: chocolates, biscuits, cakes, chips, traditional sweets, ice creams & imported drinks. Bulk supply for retailers across Kerala.",
  alternates: {
    canonical: "https://kmbakery.in/products",
  },
  openGraph: {
    title: "Products | Wholesale Bakery, Chocolates & Imported Snacks – K.M. Bakery",
    description:
      "Browse our wholesale range: chocolates, biscuits, cakes, chips, traditional sweets, ice creams & imported drinks.",
    url: "https://kmbakery.in/products",
    // TODO: point this at your real products hero image path in /public
    images: ["/product/producthero.png"],
  },
};

function ProductsJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "K.M. Bakery Wholesale Product Range",
    url: "https://kmbakery.in/products",
    description:
      "Wholesale chocolates, candies, biscuits, ice cream, soft drinks and baked items supplied across Kerala.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://kmbakery.in" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://kmbakery.in/products" },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ProductsPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <ProductsJsonLd />
      <TopBar />
      <Navbar />
      <ProductsHero />
      <ProductsListing />
      <BrandPartners/>
      <ProductsBottomFeatures />
      <BulkSupplyCTA />
      <Footer />
    </div>
  );
}

/* ============================================
   IMAGE ALT TEXT — apply inside ProductsListing
   ============================================
   Category hero image (ProductsHero):
     alt="Wholesale bakery, chocolates and food products Kerala"

   -- Chocolates & Candies --
     alt="Glacier Chocolates wholesale supplier Kerala"
     alt="Primiyo Eclairs wholesale Kerala"
     alt="Yummy Chocolates and Wafers wholesale Kerala"
     alt="Sapphire Truffle Chocolates wholesale Kerala"
     alt="Allwin Dark Chocolates wholesale Kerala"
     alt="Hoppin Toy Candies wholesale Kerala"
     alt="Ausome Wafers and Chocolates wholesale Kerala"
     alt="Hugs Chocolates and Candies wholesale Kerala"
     alt="BharatGold Soan Papdi wholesale Kerala"
     alt="Alfmin Coconut Sweets wholesale Kerala"
     alt="American Snacks wholesale Kerala"
     alt="Kamco Chew Candies wholesale Kerala"
     alt="Oshon Choco Blitz Chocolates wholesale Kerala"
     alt="Amazone Snacks wholesale Kerala"
     alt="Bro Lays chips wholesale Kerala"
     alt="KGN Sona Papdi wholesale Kerala"
     alt="Leo Choco Baba Gold candies wholesale Kerala"
     alt="SY Ice Cone wholesale Kerala"
     alt="Hunani Coconut Laddu wholesale Kerala"
     alt="KAG Milk Peda wholesale Kerala"

   -- Biscuits --
     alt="Bakemate Biscuits wholesale supplier Kerala"
     alt="Roja Osmania Biscuits wholesale Kerala"
     alt="Marino Milk Rusk wholesale Kerala"

   -- Ice Cream & Soft Drinks --
     alt="Mercelys Ice Cream wholesale distributor Kerala"
     alt="Soft drinks and fruit juices wholesale Kerala"

   -- Baked Items --
     alt="Wholesale cakes, cupcakes and bar cakes Kerala"
     alt="Kerala style Murukk wholesale supplier"
     alt="Wholesale bread supplier Kerala"

   Dubai import banner (ProductsBottomFeatures or ProductsListing sidebar):
     alt="Imported goodness from Dubai, K.M. Bakery"
============================================ */