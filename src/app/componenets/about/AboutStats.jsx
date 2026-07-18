import { Store, Award, Users, Truck, Globe } from "lucide-react";

const stats = [
  {
    value: "7",
    label: "Branches Across Kerala",
    color: "#0B2748",
    icon: Store,
  },
  {
    value: "50+",
    label: "Premium Brands",
    color: "#123B7A",
    icon: Award,
  },
  {
    value: "1000+",
    label: "Retail Partners",
    color: "#E8402C",
    icon: Users,
  },
  {
    value: "On-Time",
    label: "Delivery Across Kerala",
    color: "#0B2748",
    icon: Truck,
  },
  {
    value: "Dubai Import",
    label: "Premium Quality",
    color: "#123B7A",
    icon: Globe,
  },
];

export default function AboutStats() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-6">
          {stats.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.value}
                className="flex flex-col items-center text-center gap-3 relative"
              >
                {/* Subtle vertical separator for desktop */}
                {index !== 0 && (
                  <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-150 bg-gray-200" />
                )}
                
                {/* Minimal Icon Circle */}
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50"
                  style={{ color: s.color }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>

                {/* Value & Label */}
                <div>
                  <p className="font-extrabold text-lg tracking-tight" style={{ color: s.color }}>
                    {s.value}
                  </p>
                  <p className="text-[13px] text-slate-500 mt-1 leading-tight max-w-[120px] mx-auto">
                    {s.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}