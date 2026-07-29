export default function AboutPageHeader({
  bgImage = "/about/abouthero.png",
  mobileBgImage = "/about/abouthero-mobile.png",
}) {
  return (
    <section className="relative w-full h-[520px] sm:h-[420px] bg-[#F7F6F4] overflow-hidden">
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src={bgImage}
          alt="K.M. Bakery warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] via-[#F7F6F4]/10 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 block sm:hidden">
        <img
          src={mobileBgImage}
          alt="K.M. Bakery warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F6F4]/90 via-[#F7F6F4]/45 to-transparent" />
      </div>

      {/* Content */}
     <div className="relative z-10 h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center">
  <p className="text-[#E8402C] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.15em] mb-2 sm:mb-3">
    About Us
  </p>

 <h1
  className="text-[#123B7A]
             text-[2.25rem] leading-[1.1]
             sm:text-3xl
             lg:text-[2.4rem]
             font-extrabold
             max-w-lg"
>
  Kerala&apos;s Trusted Wholesale
  <br />
  <span className="text-[#123B7A]">
    Bakery &amp; Food Distribution
  </span>
  <br />
  Partner
</h1>

  <p className="mt-5 text-[16px] sm:text-[15px] text-black/70 max-w-md leading-relaxed">
  At K.M. Bakery &amp; Food Product, we are committed to delivering the best
  quality bakery and food products to wholesale, retailers and supermarkets
  across Kerala.
</p>
</div>
    </section>
  );
}