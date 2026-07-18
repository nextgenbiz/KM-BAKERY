export default function Hero({
  bgImage = "/hero.png",
}) {
  return (
    <section
      className="relative w-full h-[420px] sm:h-[500px] lg:h-[550px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* White gradient overlay so left-side text stays readable over the photo */}

      {/* Text content, sits on top of the background image */}
      <div className="relative h-full max-w-[1440px] mx-auto flex items-center px-6 sm:px-10 lg:px-24">
        <div className="max-w-xl">
          <h1 className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] leading-[1.15] font-extrabold text-[#123B7A]">
            Bringing The Best
            <br />
            Of Global Flavours
            <br />
            <span className="text-[#E8402C]">To Kerala</span>
          </h1>
          <p className="mt-6 text-[16px] text-slate-700 max-w-md">
            Imported Quality. Freshly Baked In-House.
            <br />
            Quality You Can Trust, Taste You&apos;ll Love.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-[#E8402C] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#d0331f] transition-colors">
              Our Products
            </button>
            <button className="border-2 border-[#123B7A] text-[#123B7A] font-semibold px-7 py-3.5 rounded-md hover:bg-[#123B7A] hover:text-white transition-colors">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}