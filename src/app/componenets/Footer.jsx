import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
];

const branches = [
  { label: "Kannur", href: "https://maps.app.goo.gl/inNjXmetQwKENwQGA" },
  {
    label: "Wayanad",
    href: "https://maps.app.goo.gl/x9tnq3LjJMFduZKQ8?g_st=iw",
  },
  { label: "Palakkad", href: "https://maps.app.goo.gl/CNerNsfbwWhNZKmu6" },
  {
    label: "Ernakulam (Cochin)",
    href: "https://maps.app.goo.gl/ByuDn748vwrfmtEM8",
  },
  { label: "Alappuzha", href: "https://maps.app.goo.gl/mSfnjKivqGuLagaG7" },
  { label: "Kollam", href: "https://maps.app.goo.gl/VYBaowkiuGAHyNEy9" },
  {
    label: "Malappuram",
    href: "https://maps.app.goo.gl/gT4zkEfGrDeL7jhg7?g_st=ic",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1GG5vesvEk/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/mittayikkada?igsh=MWwydmJpOGJ1MG90Yg%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  { icon: FaWhatsapp, href: "https://wa.me/919809969617", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B2748] text-white">
      <div className="max-w-[1280px] mx-auto px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-4 w-fit">
              <Image
                src="/logo.png"
                alt="K.M. Bakery & Food Product logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <div className="leading-tight">
                <p className="font-extrabold text-[15px]">K.M. BAKERY &amp;</p>
                <p className="font-extrabold text-[15px] -mt-1">FOOD PRODUCT</p>
              </div>
            </a>
            <p className="text-slate-300 text-[13px] leading-relaxed mb-5">
              Delivering quality bakery and food products across Kerala with
              trust and excellence.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-[12px] hover:bg-white hover:text-[#0B2748] hover:border-white transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-[15px] mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-300 text-[13px] hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <p className="font-semibold text-[15px] mb-4">Our Branches</p>
            <ul className="space-y-2">
              {branches.map((b) => (
                <li key={b.label}>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 text-[13px] hover:text-white transition-colors"
                  >
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-[15px] font-semibold">Contact Us</p>

            <ul className="space-y-3 text-[13px] text-slate-300">
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a
                    href="tel:+919809969617"
                    className="block hover:text-white transition-colors"
                  >
                    +91 98099 69617 — KOYAMON K
                  </a>
                  <a
                    href="tel:+918848119628"
                    className="block hover:text-white transition-colors"
                  >
                    +91 88481 19628 — ADIL BUKHARI K
                  </a>
                  <a
                    href="tel:+917306746796"
                    className="block hover:text-white transition-colors"
                  >
                    +91 73067 46796 — KASHIF K
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" />
                <a
                  href="mailto:info@kmbakery.in"
                  className="hover:text-white transition-colors"
                >
                  info@kmbakery.in
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <a
                  href="https://maps.app.goo.gl/gT4zkEfGrDeL7jhg7?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Arakkal Mall, <br />
                  Kadappadi, Peruvallur P.o.,
                  <br />
                  Malappuram, Kerala - 673638{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-slate-400">
          <p>© 2024 K.M. Bakery &amp; Food Product. All Rights Reserved.</p>
          <p>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>{" "}
            &nbsp;|&nbsp;
            <a href="#" className="hover:text-white">
              {" "}
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
