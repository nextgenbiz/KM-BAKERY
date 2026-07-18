export default function BecomeDistributionPartner({ bgImage = "/handshake-bg.jpg" }) {
  return (
    <section
      className="relative w-full bg-[#0B2748] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Navy tint so background photo stays subtle behind the text */}
      <div className="absolute inset-0 bg-[#0B2748]/90" />

      <div className="relative max-w-[1280px] mx-auto px-6 py-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <span className="block h-[3px] w-8 bg-white mb-3" />
          <h2 className="text-white text-2xl md:text-3xl font-extrabold leading-tight mb-2">
            Become Our Distribution Partner
          </h2>
          <p className="text-slate-300 text-[14px] max-w-md">
            Let&apos;s grow together by delivering the best quality bakery and food products to
            every corner of Kerala.
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button className="bg-[#E8402C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#d0331f] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            Get In Touch
          </button>
          <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#0B2748] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
