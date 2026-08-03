export default function ProductPageHeader({
  bgImage = "/product/producthero.webp",
  mobileBgImage = "/product/producthero-mobile.webp",
}) {
  return (
    <section className="relative w-full h-[520px] sm:h-[420px] bg-[#F7F6F4] overflow-hidden">
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src={bgImage}
          alt="K.M. Bakery & Food Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] via-[#F7F6F4]/10 to-transparent" />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 block sm:hidden">
        <img
          src={mobileBgImage}
          alt="K.M. Bakery & Food Products"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-start pt-12 sm:justify-center sm:pt-0">
        <p className="text-[#E8402C] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.15em] mb-2 sm:mb-3">
          Our Products
        </p>

        <h1
          className="text-[#123B7A]
                     text-[2.25rem] leading-[1.1]
                     sm:text-3xl
                     lg:text-[2.4rem]
                     font-extrabold
                     max-w-lg"
        >
          Premium Bakery,
          <br />
          <span className="text-[#123B7A]">
            Chocolates &amp; Food Products
          </span>
          <br />
          Under One Roof
        </h1>

        <p className="mt-5 text-[16px] sm:text-[15px] text-black/70 max-w-md leading-relaxed">
          Explore our extensive collection of bakery products, chocolates,
          biscuits, candies, ice creams, beverages and imported food brands —
          trusted by retailers, supermarkets and distributors across Kerala.
        </p>
      </div>
    </section>
  );
}