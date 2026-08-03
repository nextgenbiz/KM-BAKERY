import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://kmbakery.in"),
  title: {
    default: "K.M. Bakery & Food Product | Wholesale Bakery Distributor Kerala",
    template: "%s | K.M. Bakery & Food Product",
  },
  description:
    "Kerala's trusted wholesale bakery & food distributor. Super stockist for 50+ brands, importer from Dubai. 7 branches across Kerala.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    siteName: "K.M. Bakery & Food Product",
    locale: "en_IN",
    type: "website",
  },
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "K.M. Bakery & Food Product",
    alternateName: "KM Bakery",
    url: "https://kmbakery.in",
    logo: "https://kmbakery.in/logo.png",
    description:
      "Wholesale bakery and food product distributor and super stockist serving retailers, supermarkets, hotels and institutions across Kerala, importing premium products from Dubai.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Arakkal Mall, Kadappadi, Peruvallur P.O.",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      postalCode: "673638",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98099-69617",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Malayalam"],
    },
    sameAs: [
      "https://www.facebook.com/share/1GG5vesvEk/?mibextid=wwXIfr",
      "https://www.instagram.com/mittayikkada",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}