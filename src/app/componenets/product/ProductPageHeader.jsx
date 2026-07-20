export default function ProductPageHeader({ bgImage = "product/producthero.png" }) {
  return (
    <section className="relative w-full h-[280px] sm:h-[420px] bg-[#F7F6F4] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="K.M. Bakery & Food Products"
          className="w-full h-full object-cover"
        />

        {/* Fade from left so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] via-[#F7F6F4]/10 to-transparent" />
      </div>

      <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center">
        <p className="text-[#E8402C] font-semibold text-[13px] uppercase tracking-wide mb-3">
          Our Products
        </p>

        <h1 className="text-[#0B2748] text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold leading-tight max-w-lg">
          Premium Bakery,
          <br />
          <span className="text-[#123B7A]">
            Chocolates &amp; Food Products
          </span>
          <br />
          Under One Roof
        </h1>

        <p className="text-black/70 text-[14px] max-w-md mt-4">
          Explore our extensive collection of bakery products, chocolates,
          biscuits, candies, ice creams, beverages and imported food brands —
          trusted by retailers, supermarkets and distributors across Kerala.
        </p>
      </div>
    </section>
  );
}