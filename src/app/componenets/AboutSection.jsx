const stats = [
  { value: "10,000+", label: "Happy Clients" },
  { value: "3000+", label: "Products" },
  { value: "50+", label: "Trusted Brands" },
  { value: "15+", label: "Years of Trust" },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <p className="text-[#E8402C] font-semibold text-[13px] tracking-wide uppercase mb-3">
            About K.M. Bakery
          </p>
          <h2 className="text-[#0B2748] text-3xl font-extrabold leading-tight mb-5">
            Your Trusted Partner For Bakery &amp; Food Products
          </h2>
          <p className="text-slate-600 text-[15px] mb-4">
            <span className="font-semibold text-[#0B2748]">At K.M. Bakery,</span> we provide
            end-to-end solutions for businesses across Kerala with high-quality products and
            reliable wholesale services.
          </p>
          <p className="text-slate-600 text-[15px] mb-8">
            We are committed to freshness, quality, and timely delivery, ensuring customer
            satisfaction at every step.
          </p>

          <div className="grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[#E8402C] font-extrabold text-xl">{s.value}</p>
                <p className="text-slate-500 text-[12px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div>
          <img
            src="/abouthome.png"
            alt="Basket of fresh bread"
            className="w-full h-[380px] object-cover rounded-[8px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
