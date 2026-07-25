import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import { CheckCircle2 } from "lucide-react";

const socials = [
  { icon: FaFacebookF, href: "https://www.facebook.com/share/1GG5vesvEk/?mibextid=wwXIfr", color: "text-[#1877F2]" },
  { icon: FaInstagram, href: "https://www.instagram.com/mittayikkada?igsh=MWwydmJpOGJ1MG90Yg%3D%3D&utm_source=qr", color: "text-[#E1306C]" },
  { icon: FaWhatsapp, href: "https://wa.me/919809969617", color: "text-[#25D366]" },
];

const perks = [
  "Wide Product Range",
  "Reliable Supply",
  "Competitive Prices",
  "On-time Delivery",
  "Dedicated Support",
];

export default function FollowPerksCard() {
  return (
    <div className="bg-[#F3F6FA] rounded-xl p-6 h-full w-full lg:w-[300px]">
      
      <h3 className="text-[15px] font-extrabold text-slate-900">Follow Us</h3>
      <div className="mt-3 flex items-center gap-3">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
          >
            <s.icon className={`w-5 h-5 ${s.color}`} />
          </a>
        ))}
      </div>
      <div className="mt-5 border-t border-slate-200 pt-5">
        <h3 className="text-[15px] font-extrabold text-slate-900">
          Why Partner With Us?
        </h3>
        <ul className="mt-3 space-y-2">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2">
              <CheckCircle2
                className="w-3.5 h-3.5 text-[#E8402C] shrink-0"
                strokeWidth={2}
              />
              <span className="text-[12px] text-slate-700">{perk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
