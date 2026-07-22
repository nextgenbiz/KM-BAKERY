import { MapPin, ArrowUpRight } from "lucide-react";

export default function MapSection({
  mapEmbedSrc = "https://www.google.com/maps?q=Kochi,Kerala&output=embed",
  address = "Near Town Hall, Market Road, Kochi - 682 016, Kerala, India",
}) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 py-12">
        <div className="relative rounded-xl overflow-hidden border border-slate-200">
          <iframe
            src={mapEmbedSrc}
            title="K.M. Bakery & Food Product location"
            className="w-full h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute top-18 left-2 bg-white rounded-[2px] shadow-lg p-5 w-75 max-w-[80%]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E8402C]" strokeWidth={2} />
              <p className="text-[14px] font-bold text-slate-900">Find Us Here</p>
            </div>
            <p className="mt-3 text-[13px] font-semibold text-slate-800">
              K.M. Bakery & Food Product
            </p>
            <p className="mt-1 text-[12px] text-slate-500 leading-snug">{address}</p>
            
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 bg-[#123B7A] text-white text-[13px] font-semibold px-4 py-2 rounded-md hover:bg-[#0d2c5c] transition-colors"
            >
              Get Directions
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}