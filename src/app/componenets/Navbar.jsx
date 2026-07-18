"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", active: true },
    { label: "About Us" },
    { label: "Services" },
    { label: "Products" },
    { label: "Gallery" },
    { label: "Our Branches" },
    { label: "Contact Us" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md border-b border-transparent" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="K.M. Bakery & Food Product logo"
            width={40}
            height={40}
            priority
            className="h-12 w-12 object-contain"
          />
          <div className="leading-tight">
            <p className="text-[#0B2748] font-extrabold text-lg tracking-tight">
              K.M. BAKERY &amp;
            </p>
            <p className="text-[#0B2748] font-extrabold text-lg tracking-tight -mt-1">
              FOOD PRODUCT
            </p>
          </div>
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href="#"
              className={`text-[15px] font-medium pb-1 transition-colors ${
                link.active
                  ? "text-[#E8402C] border-b-2 border-[#E8402C]"
                  : "text-[#0B2748] hover:text-[#E8402C]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}