import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-[#E8402C] text-white">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-2 text-sm">
        {/* Left: logo mark + tagline */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M4 10h16v2a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-2Z" fill="#fff" />
              <path d="M4 10a8 8 0 0 1 16 0" stroke="#fff" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="font-semibold text-[13px]">Wholesale Bakery &amp; Food</p>
            <p className="text-[11px] text-white/80">Products</p>
          </div>
        </div>

        {/* Center-right: contact info */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M6 2h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 11l5 2v3a2 2 0 0 1-2 2C10.5 18 4 11.5 4 4a2 2 0 0 1 2-2Z" fill="#fff" />
            </svg>
            <span className="text-[13px]">+91 98099 69617 </span>
          </a>
          <a href="mailto:info@kmbakery.com" className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <rect x="2" y="5" width="20" height="14" rx="2" fill="#fff" />
              <path d="M2 6l10 7L22 6" stroke="#E8402C" strokeWidth="1.4" />
            </svg>
            <span className="text-[13px]">info@kmbakery.in</span>
          </a>
        </div>

        {/* Right: CTA button */}
        <Link  href="/contact" className="bg-[#0B2748] text-white text-[13px] font-medium px-4 py-2 rounded-md hover:bg-[#0f3260] transition-colors">
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
