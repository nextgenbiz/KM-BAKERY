"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled
          ? "shadow-md border-b border-transparent"
          : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo.png"
            alt="K.M. Bakery & Food Product Logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain"
          />

          <div className="leading-tight">
            <p className="text-[#0B2748] font-extrabold text-lg tracking-tight">
              K.M. BAKERY &
            </p>
            <p className="text-[#0B2748] font-extrabold text-lg tracking-tight -mt-1">
              FOOD PRODUCT
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-1 text-[15px] font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#E8402C]"
                    : "text-[#0B2748] hover:text-[#E8402C]"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#E8402C]" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}