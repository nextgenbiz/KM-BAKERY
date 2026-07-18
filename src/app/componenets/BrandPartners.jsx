import Image from "next/image";

const brands = [
  { name: "Bakemate", img: "/bakemate.png" },
  { name: "Hugs", img: "/hugs.png" },
  { name: "American Snacks", img: "/as.png" },
  { name: "Kamco", img: "/kmco.png" },
  { name: "Glacier", img: "/glacier.png" },
];

export default function BrandPartners() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-18">
          <p className="text-[#E8402C] font-semibold text-[13px] tracking-wide uppercase mb-3">
            Trusted Super Stockist
          </p>
          <h2 className="text-[#0B2748] text-2xl md:text-3xl font-extrabold leading-tight">
            Brands We Proudly Distribute Across Kerala
          </h2>
          <p className="text-slate-500 text-[15px] mt-3 max-w-xl mx-auto">
            As Kerala&apos;s trusted super stockist, we supply leading brands to retailers and
            supermarkets statewide.
          </p>
        </div>

        {/* Brand logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {brands.map((b) => (
            <div
              key={b.name}
              className="flex items-center justify-center  h-28 px-6  hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <Image
                src={b.img}
                alt={b.name}
                width={140}
                height={70}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}