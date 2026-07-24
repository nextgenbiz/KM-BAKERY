import { MapPin, Phone, Mail, Clock } from "lucide-react";

const items = [
  {
    icon: MapPin,
    iconBg: "bg-[#E8402C]",
    title: "Head Office",
    lines: [
      "4W7V+6G5, Kadappadi-Mathamkulam Puthanpurakkal, Valakkandi, Peruvallur, Kerala 673638, India",
    ],
  },

  {
    icon: Phone,
    iconBg: "bg-[#123B7A]",
    title: "Phone",
    lines: ["+91 98765 43210", "+91 0484 1234567"],
  },
  {
    icon: Mail,
    iconBg: "bg-[#E8402C]",
    title: "Email",
    lines: ["info@kmbakery.com", "orders@kmbakery.com"],
  },
  {
    icon: Clock,
    iconBg: "bg-[#123B7A]",
    title: "Working Hours",
    lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
  },
];

export default function GetInTouchCard() {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-6 h-full w-full lg:w-[300px]">
      {" "}
      <h2 className="text-[#123B7A] text-[18px] font-extrabold">
        Get In Touch
      </h2>
      <div className="mt-2 w-10 h-[3px] bg-[#E8402C]" />
      <div className="mt-5 space-y-5">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <span
              className={`w-9 h-9 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}
            >
              <item.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
            </span>
            <div>
              <p className="text-[13px] font-bold text-slate-900">
                {item.title}
              </p>
              {item.lines.map((line) => (
                <p
                  key={line}
                  className="text-[12px] text-slate-500 leading-snug"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
