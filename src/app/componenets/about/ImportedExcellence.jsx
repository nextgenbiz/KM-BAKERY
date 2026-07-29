
import Link from "next/link";

export default function ImportedExcellence({ bgImage = "/about/cta.png" }) {
  return (
    <section className="w-full bg-white pt-4 pb-">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Dark gradient so text stays legible over the busy port photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2748]/50 via-[#0B2748]/10 to-transparent" />

          <div className="relative h-full flex flex-col justify-center px-8 sm:px-12 max-w-md">
            <h3 className="text-white text-xl sm:text-2xl font-extrabold mb-1">
              Imported Excellence
            </h3>
            <span className="block h-[3px] w-8 bg-[#E8402C] mb-4" />
            <p className="text-slate-100 text-[14px] leading-relaxed mb-6">
              We import premium quality food products directly from Dubai to
              bring the best global flavours to Kerala.
            </p>
            <Link href="/products" className="w-fit bg-[#E8402C] text-white font-semibold text-[14px] px-6 py-3 rounded-md hover:bg-[#d0331f] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Explore Imported Products
            </Link >
          </div>
        </div>
      </div>
    </section>
  );
}
