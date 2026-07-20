import { Handshake } from "lucide-react";

export default function BulkSupplyCTA() {
  return (
    <section className="w-full pb-2 ">
      <div className=" bg-[#123B7A] rounded-xl  max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-24 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <Handshake className="w-8 h-8 text-white shrink-0 hidden sm:block" strokeWidth={1.5} />
          <div>
            <h3 className="text-white text-[20px] sm:text-[22px] font-bold">
              Looking for Bulk Supply?
            </h3>
            <p className="text-slate-200 text-[14px] mt-1">
              Let&apos;s grow together. Get the best products at the best prices.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <button className="bg-[#E8402C] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors">
            Get In Touch
          </button>
          <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-[#123B7A] transition-colors">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}