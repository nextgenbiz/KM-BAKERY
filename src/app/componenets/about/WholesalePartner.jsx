
import {
  Boxes,
  Warehouse,
  Truck,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    title: "Wholesale Bakery & Food Products",
    desc: "Wide range of bakery and food products from trusted local & global brands.",
    bg: "bg-[#123B7A]",
    icon: <Boxes size={20} strokeWidth={2} />
  },
  {
    title: "Super Stockist in Kerala",
    desc: "We are the super stockist for leading brands, serving 1000+ retail outlets.",
    bg: "bg-[#E8402C]",
    icon: <Warehouse size={20} strokeWidth={2} />
  },
  {
    title: "Importer From Dubai",
    desc: "Bringing premium quality food products directly from Dubai to Kerala.",
    bg: "bg-[#123B7A]",
    icon: <Truck size={20} strokeWidth={2} />
  },
  {
    title: "Serving Retailers & Supermarkets",
    desc: "Reliable distribution network ensuring on-time delivery, always.",
    bg: "bg-[#E8402C]",
    icon: <ShoppingCart size={20} strokeWidth={2} />
  },
];

export default function WholesalePartner({ image = "/warehouse-trucks.png" }) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy + features */}
        <div>
          <p className="text-[#E8402C] font-semibold text-[13px] uppercase tracking-wide mb-3">
            Who We Are
          </p>
          <h2 className="text-[#123B7A] text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
            Your One-Stop Wholesale Partner
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-8">
            We specialize in the wholesale distribution of bakery and food products to retailers,
            super markets, hotels, restaurants and institutions across Kerala. Our strong supply
            chain, vast product range and commitment to quality make us the preferred partner for
            businesses of all sizes.
          </p>

          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div
                  className={`shrink-0 w-9 h-9 rounded-lg ${f.bg} flex items-center justify-center text-white`}
                >
                  {f.icon}
                </div>
                <div>
                  <p className="text-[#0B2748] font-semibold text-[15px]">{f.title}</p>
                  <p className="text-slate-500 text-[13px] mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div>
          <img
            src="/about6.webp"
            alt="K.M. Bakery distribution trucks and warehouse"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
