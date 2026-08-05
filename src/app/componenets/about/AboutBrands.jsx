const subBrands = [
  {
    name: "Sub Brand One",
    img: "/sub1.png", // Replace with your image
    tagline: "Premium Quality",
    description: "Crafted with the finest ingredients, this sub-brand represents our commitment to gourmet excellence and premium taste for discerning customers."
  },
  {
    name: "Sub Brand Two",
    img: "/sub2.jpeg", // Replace with your image
    tagline: "Everyday Freshness",
    description: "Focused on daily freshness and affordability, this line brings our trusted bakery heritage to everyday snacks and household staples across Kerala."
  },
];

export default function AboutBrands() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h3 className="text-[#0B2748] text-3xl font-extrabold mb-1">Our Sub-Brands</h3>
          <span className="block h-[3px] w-8 bg-[#E8402C] mb-4" />
          <p className="text-black/70 text-[15px] max-w-xl">
            Beyond our main flagship products, we have expanded our family with specialized sub-brands designed to cater to diverse tastes and daily needs.
          </p>
        </div>

        {/* Sub-Brands Grid (No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {subBrands.map((brand, index) => (
            <div 
              key={brand.name} 
              className={`flex flex-col md:flex-row items-start gap-6 ${
                index === 0 ? 'md:border-r md:border-gray-200 md:pr-12' : 'md:pl-4'
              }`}
            >
              {/* Logo Area */}
              <div className="w-full md:w-2/5 flex-shrink-0 bg-amber-">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-32 object-contain scale-[1.1] " // Clean presentation without a card
                />
              </div>

              {/* Content Area */}
              <div className="w-full md:w-3/5">
                {/* Matches the "About Us" label style from Hero section */}
                <p className="text-[#E8402C] font-semibold text-[13px] uppercase tracking-wide mb-2">
                  {brand.tagline}
                </p>
                <h4 className="text-[#123B7A] text-xl font-extrabold mb-3">
                  {brand.name}
                </h4>
                <p className="text-black/70 text-[14px] leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}