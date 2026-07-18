const cities = [
  { name: "Dubai", img: "/dubai.jpg" },
  { name: "Mumbai", img: "/mumbai.jpg" },
  { name: "Delhi", img: "/delhi.jpg" },
];

export default function GlobalSources() {
  return (
    <section className="w-full bg-[#0B2748] py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Left copy */}
        <div>
          <p className="text-[#E8402C] font-semibold text-[13px] tracking-wide uppercase mb-3">
            Trusted Sourcing
          </p>
          <h2 className="text-white text-3xl font-extrabold leading-tight mb-5">
            From Trusted
            <br />
            Sourcing Hubs
          </h2>
          <p className="text-slate-300 text-[15px] max-w-md mb-8">
            We source premium products from trusted suppliers in Dubai, Mumbai and Delhi,
            bringing authentic quality to retailers and supermarkets across Kerala.
          </p>
          <button className="bg-[#E8402C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors">
            Know More
          </button>
        </div>

        {/* Right images */}
        <div className="grid grid-cols-3 gap-4">
          {cities.map((c) => (
            <div key={c.name} className="relative rounded-[2px] overflow-hidden w-full h-[280px]">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-sm">
                {c.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}