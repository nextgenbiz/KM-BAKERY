const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#E8402C" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
    value: "6",
    label: "Branches Across\nKerala",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#0B2748" strokeWidth="1.6">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.4 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.4-3.8-8.5S9.5 5.9 12 3.5Z" />
      </svg>
    ),
    value: "Global Imports",
    label: "Sourced From Trusted\nInternational Brands",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#E8402C" strokeWidth="1.6">
        <path d="M6 10c0-2.8 2.7-5 6-5s6 2.2 6 5c1.1.2 2 1.2 2 2.4 0 1.3-1.1 2.4-2.4 2.4H6.4A2.4 2.4 0 0 1 4 12.4C4 11.2 4.9 10.2 6 10Z" />
        <path d="M6 15v3.5A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5V15" />
      </svg>
    ),
    value: "In-House Bakery",
    label: "Freshly Manufactured\nBaking Products",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#0B2748" strokeWidth="1.6">
        <circle cx="12" cy="9" r="5" />
        <path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" />
      </svg>
    ),
    value: "Quality & Freshness",
    label: "Our Promise",
  },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-white pt-10 pb-4">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 px-6 py-8">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center gap-2 px-4 py-4 md:py-0">
              {s.icon}
              <p className="font-extrabold text-[#0B2748] text-[15px] mt-1">{s.value}</p>
              <p className="text-[13px] text-slate-500 whitespace-pre-line leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}