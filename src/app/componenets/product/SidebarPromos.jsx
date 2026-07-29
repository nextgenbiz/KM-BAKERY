import Link from "next/link";

export default function SidebarPromos({ dubaiImage = "/product/promo.png" }) {
  return (
    <div className="space-y-6">
      {/* Imported Goodness */}
      <div className="relative rounded-xl overflow-hidden min-h-[440px] flex flex-col">
        <div
          role="img"
          aria-label="Dubai skyline and shipping containers"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${dubaiImage})` }}
        />

        <div className="relative rounded-xl overflow-hidden h-[440px] flex flex-col">
          <div
            role="img"
            aria-label="Dubai skyline and shipping containers"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${dubaiImage})` }}
          />

          <div className="relative z-10 flex flex-col h-full p-6">
            <h3 className="text-[20px] font-extrabold leading-snug">
              <span className="text-slate-900">Imported Goodness</span>
              <br />
              <span className="text-[#123B7A]">From Dubai</span>
            </h3>

            <p className="mt-6 text-[13px] text-slate-700 leading-relaxed max-w-[85%]">
              Bringing premium international brands to your business.
            </p>

            <Link
  href="/about"
  className="mt-auto flex w-full items-center justify-center rounded-md bg-[#E8402C] py-3 text-[14px] font-semibold text-white shadow-lg transition-colors hover:bg-[#d0331f]"
>
  Learn More
</Link>
          </div>
        </div>
      </div>

      {/* Bulk Orders */}
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

       <Link
  href="/contact"
  className="mt-5 flex w-full items-center justify-center rounded-md bg-[#123B7A] py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#0d2c5c]"
>
  Get a Quote
</Link>
      </div>
    </div>
  );
}