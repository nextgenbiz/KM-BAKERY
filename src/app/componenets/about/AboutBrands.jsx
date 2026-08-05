const subBrands = [
  {
    name: "Sub Brand One",
    img: "/sub1.png",
    tagline: "Premium Quality",
    description:
      "Crafted with the finest ingredients, this sub-brand represents our commitment to gourmet excellence and premium taste for discerning customers.",
  },
  {
    name: "Sub Brand Two",
    img: "/sub2.jpeg",
    tagline: "Everyday Freshness",
    description:
      "Focused on daily freshness and affordability, this line brings our trusted bakery heritage to everyday snacks and household staples across Kerala.",
  },
  {
    name: "Sub Brand Three",
    img: "/sub3.jpeg",
    tagline: "Authentic Taste",
    description:
      "Celebrating Kerala's bakery heritage with carefully crafted products that blend traditional flavors with modern quality standards.",
  },
];

export default function AboutBrands() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0B2748]">
            Our Sub-Brands
          </h3>

          <span className="block h-[3px] w-10 bg-[#E8402C] mt-2 mb-5" />

          <p className="text-black/70 leading-relaxed">
            Beyond our flagship products, we've grown a family of specialized
            brands that bring quality, freshness, and authentic taste to every
            customer.
          </p>
        </div>

        {/* Brands */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {subBrands.map((brand, index) => (
            <div
              key={brand.name}
              className={`
                group
                relative
                flex
                flex-col
                items-center
                text-center
                px-6
                py-10
                transition-all
                duration-300

                ${
                  index !== subBrands.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-200"
                    : ""
                }
              `}
            >
              {/* Logo */}
              <div className="flex items-center justify-center h-36 w-full mb-6">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-28 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Tagline */}
              <p className="text-[#E8402C] uppercase tracking-[0.18em] text-xs font-bold mb-2">
                {brand.tagline}
              </p>

              {/* Name */}
              <h4 className="text-[#123B7A] text-2xl font-extrabold mb-4">
                {brand.name}
              </h4>

              {/* Description */}
              <p className="text-[15px] leading-7 text-black/70 max-w-sm">
                {brand.description}
              </p>

              {/* Accent Line */}
              <div className="mt-8 h-1 w-10 rounded-full bg-[#E8402C] transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}