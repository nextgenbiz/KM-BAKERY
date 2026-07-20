import { Users, ShieldCheck, Handshake, Truck, HeartHandshake } from "lucide-react";

const items = [
  { icon: Users, title: "Wide Product Range", subtitle: "One stop solution for all your bakery & food needs" },
  { icon: ShieldCheck, title: "Best Quality", subtitle: "Carefully selected premium products" },
  { icon: Handshake, title: "Competitive Prices", subtitle: "Best value for your business" },
  { icon: Truck, title: "Reliable Supply", subtitle: "On-time delivery across Kerala" },
  { icon: HeartHandshake, title: "Partner With Us", subtitle: "Grow your business with KM Bakery" },
];

export default function ProductsBottomFeatures() {
  return (
    <section className="w-full py-2 ">
      <div className=" bg-[#F3F6FA] max-w-[1340px] mx-auto px-6 py-6 rounded-xl sm:px-10 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <item.icon className="w-6 h-6 text-[#123B7A] shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-[14px] font-bold text-[#123B7A]">{item.title}</p>
              <p className="text-[12px] text-slate-500 mt-1 leading-snug">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}