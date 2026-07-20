export default function AboutPageHeader({ bgImage = "about/abouthero.png" }) {
  return (
    <section className="relative w-full h-[280px] sm:h-[420px] bg-[#F7F6F4] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="K.M. Bakery warehouse"
          className="w-full h-full object-cover"
        />
        {/* Fade from left so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] via-[#F7F6F4]/10 to-transparent" />
      </div>

      <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center">
        <p className="text-[#E8402C] font-semibold text-[13px] uppercase tracking-wide mb-3">
          About Us
        </p>
        <h1 className="text-[#0B2748] text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold leading-tight max-w-lg">
          Kerala&apos;s Trusted Wholesale
          <br />
          <span className="text-[#123B7A]">Bakery &amp; Food Distribution</span>
          <br />
          Partner
        </h1>
        <p className="text-black/70 text-[14px] max-w-md mt-4">
          At K.M. Bakery &amp; Food Product, we are committed to delivering the best quality
          bakery and food products to wholesale, retailers and supermarkets across Kerala.
        </p>

        
      </div>
    </section>
  );
}
