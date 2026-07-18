const products = [
  { name: "Chocolates", img: "/product/choco.png" },
  { name: "Biscuits", img: "/product/b.png" },
  { name: "Eclairs", img: "/product/e.png" },
  { name: "Chips & Snacks", img: "/product/s.png" },
  { name: "Gift Items", img: "/product/g.png" },
  { name: "Traditional Indian Sweets", img: "/product/ti.png" },
  { name: "Bakery Products", img: "/product/B.png" },
  { name: "Flavoured Carbonated Drinks", img: "/product/cd.png" },
];

export default function ProductRange() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="h-[2px] w-10 bg-[#E8402C]" />
          <h2 className="text-[#0B2748] text-2xl md:text-3xl font-extrabold text-center">
            Our Product Range
          </h2>
          <span className="h-[2px] w-10 bg-[#E8402C]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {products.map((p) => (
            <div key={p.name} className="flex flex-col items-center">
              <img
                src={p.img}
                alt={p.name}
                className=" h-[200px] object-contain  shadow-sm"
              />
              <p className="mt-2 text-[#0B2748] font-semibold text-[12px] text-center leading-snug">
                {p.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-transparent text-[#0B2748] font-light border-[1px] border-[#02101f] px-4 py-2 rounded-md transition-all duration-300 ease-out hover:bg-[#0B2748] hover:text-white hover:border-[#0B2748] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}