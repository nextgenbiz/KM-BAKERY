import TopBar from "../componenets/TopBar";
import Navbar from "../componenets/Navbar";
import ContactFormSection from "../componenets/ContactFormSection";
import BranchesSection from "../componenets/BranchesSection";
import MapSection from "../componenets/MapSection";
import Footer from "../componenets/Footer";
import ContactPageHeader from "../componenets/ContactPageHeader";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with K.M. Bakery for bulk orders, wholesale distribution & partnerships. Branches in Kannur, Wayanad, Palakkad, Cochin, Alappuzha, Kollam & Malappuram.",
  alternates: {
    canonical: "https://kmbakery.in/contact",
  },
  openGraph: {
    title: "Contact Us | K.M. Bakery & Food Product – 7 Branches Across Kerala",
    description:
      "Get in touch for bulk orders, wholesale distribution & partnerships. 7 branches across Kerala.",
    url: "https://kmbakery.in/contact",
  },
};

const branches = [
  {
    name: "K.M. Bakery & Food Product – Head Office, Malappuram",
    telephone: "+91-98099-69617",
    email: "info@kmbakery.com",
    streetAddress: "Arakkal Mall, Kadappadi, Peruvallur P.O.",
    addressLocality: "Malappuram",
    postalCode: "673638",
    hasMap: "https://maps.app.goo.gl/gT4zkEfGrDeL7jhg7?g_st=ic",
  },
  {
    name: "KM Candy Street – Stock List & Distributor, Kannur",
    telephone: "+91-73067-46796",
    streetAddress: "Bldg No. 296B to 296M, AR Complex, Ezhilod Under Pass, Cheruthazham",
    addressLocality: "Kannur",
    postalCode: "670309",
    hasMap: "https://maps.app.goo.gl/inNjXmetQwKENwQGA",
  },
  {
    name: "KM Sweet Wayanad – Mittayikkada",
    telephone: "+91-98099-69617",
    streetAddress: "16/23B, 23C, Madrassa Building, Kaniyambetta Juma Masjid, Pachilakkad",
    addressLocality: "Wayanad",
    postalCode: "673122",
    hasMap: "https://maps.app.goo.gl/x9tnq3LjJMFduZKQ8?g_st=iw",
  },
  {
    name: "KM Market Plus, Palakkad",
    telephone: "+91-88481-19628",
    streetAddress: "CMR Building 9/273, Pirayiri",
    addressLocality: "Palakkad",
    postalCode: "678003",
    hasMap: "https://maps.app.goo.gl/CNerNsfbwWhNZKmu6",
  },
  {
    name: "KM Sweet Cochin, Ernakulam",
    telephone: "+91-85900-81798",
    streetAddress: "13/512B, Vengola, Kolancheri Road, Sunni Masjid, Allapra",
    addressLocality: "Ernakulam",
    postalCode: "683556",
    hasMap: "https://maps.app.goo.gl/ByuDn748vwrfmtEM8",
  },
  {
    name: "K M R Stockist & Distributors, Alappuzha",
    telephone: "+91-98099-69617",
    streetAddress: "10-7/B, Narayana Vilasam Junction, Karthikapally, Karuvatta",
    addressLocality: "Alappuzha",
    postalCode: "690517",
    hasMap: "https://maps.app.goo.gl/mSfnjKivqGuLagaG7",
  },
  {
    name: "KM Bakery & Food Product, Kollam",
    telephone: "+91-98099-69617",
    streetAddress: "XIV/935, Nisam Building, Mayyathumkara, Chakkuvally, Poruvazhy",
    addressLocality: "Kollam",
    postalCode: "690520",
    hasMap: "https://maps.app.goo.gl/VYBaowkiuGAHyNEy9",
  },
];

function ContactJsonLd() {
  const schema = branches.map((b) => ({
    "@context": "https://schema.org",
    "@type": "Store",
    name: b.name,
    telephone: b.telephone,
    ...(b.email ? { email: b.email } : {}),
    hasMap: b.hasMap,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.streetAddress,
      addressLocality: b.addressLocality,
      addressRegion: "Kerala",
      postalCode: b.postalCode,
      addressCountry: "IN",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <ContactJsonLd />
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

/* ============================================
   IMAGE ALT TEXT
   ============================================
   Hero "KB" logo graphic (ContactPageHeader):
     alt="K.M. Bakery and Food Product logo"

   Branch icon graphics in BranchesSection (all 7 cards):
     alt="K.M. Bakery branch location icon"
============================================ */