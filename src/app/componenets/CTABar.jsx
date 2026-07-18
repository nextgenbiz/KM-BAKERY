const features = [
  {
    label: "Wide Product Range",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#E8402C" strokeWidth="1.6">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "Timely Delivery",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#E8402C" strokeWidth="1.6">
        <rect x="2" y="8" width="13" height="9" rx="1.5" />
        <path d="M15 11h4l3 3v3h-7z" />
        <circle cx="7" cy="19" r="1.6" />
        <circle cx="17.5" cy="19" r="1.6" />
      </svg>
    ),
  },
  {
    label: "Competitive Prices",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#E8402C" strokeWidth="1.6">
        <path d="M4 4h6l10 10-6 6L4 10Z" />
        <circle cx="8.5" cy="8.5" r="1.3" fill="#E8402C" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Dedicated Support",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="#E8402C" strokeWidth="1.6">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
  },
];

export default function CTABar({ bgImage = "/ctabg.png" }) {
  return (
    <section
      className="w-full bg-[#FBEDEA] bg-cover bg-clip-border bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <h2 className="text-[#0B2748] text-2xl md:text-3xl font-extrabold leading-tight max-w-xl">
            Let&apos;s Grow Your Business
            <br />
            With The Best Quality Products.
          </h2>
          <div className="flex items-center gap-4 shrink-0 ">
            <button className="bg-[#E8402C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors">
              Get In Touch
            </button>
            <button className="border-2 bg-[#0f2e51]  border-[#0B2748] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0B2748]  transition-colors">
              Request a Quote
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              {f.icon}
              <span className="text-[#0B2748] font-medium text-[14px]">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}