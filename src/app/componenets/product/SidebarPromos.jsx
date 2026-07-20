export default function SidebarPromos({ dubaiImage = "/product/promo.png" }) {
  return (
    <div className="space-y-6">
      {/* Imported Goodness — full-bleed photo card */}
      <div className="relative rounded-xl overflow-hidden min-h-[440px] flex flex-col">
        {/* Background photo, fills the entire card */}
        <div
          role="img"
          aria-label="Dubai skyline and shipping containers"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dubaiImage})` }}
        />

      

        {/* Foreground content */}
       <div className="relative rounded-xl overflow-hidden h-[440px] flex flex-col">
  {/* background photo */}
  <div
    role="img"
    aria-label="Dubai skyline and shipping containers"
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${dubaiImage})` }}
  />

  {/* readability gradient */}


  {/* foreground content — now correctly fills the fixed-height card */}
  <div className="relative z-10 flex flex-col h-full p-6">
    <h3 className="text-[20px] font-extrabold leading-snug">
      <span className="text-slate-900">Imported Goodness</span>
      <br />
      <span className="text-[#123B7A]">From Dubai</span>
    </h3>
    <p className="mt-6 text-[13px] text-slate-700 leading-relaxed max-w-[85%]">
      Bringing premium international brands to your business.
    </p>

    <button className="mt-auto w-full bg-[#E8402C] text-white font-semibold text-[14px] py-3 rounded-md hover:bg-[#d0331f] transition-colors shadow-lg">
      Learn More
    </button>
  </div>
</div>
      </div>

      {/* Bulk Orders card stays as-is */}
      <div className="bg-[#EAF3FC] rounded-md p-6">
        <h3 className="text-[18px] font-extrabold text-[#123B7A] leading-snug">
          Bulk Orders
          <br />
          &amp; Distribution
        </h3>
        <p className="mt-3 text-[13px] text-slate-600 leading-relaxed">
          We supply to retailers, supermarkets, hotels, cafes &amp;
          institutions across Kerala.
        </p>
        <button className="mt-5 w-full bg-[#123B7A] text-white font-semibold text-[14px] py-2.5 rounded-md hover:bg-[#0d2c5c] transition-colors">
          Get a Quote
        </button>
      </div>
    </div>
  );
}