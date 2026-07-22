
import { Landmark,MapPin } from "lucide-react";

export default function BranchCard({ number, name, address, phone, mapUrl }) {
  return (
    <div className="relative border border-slate-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow flex flex-col h-full">
      <span className="absolute -top-3 left-4 w-6 h-6 rounded-full bg-[#123B7A] text-white text-[11px] font-bold flex items-center justify-center">
        {number}
      </span>

      <Landmark className="w-8 h-8 text-[#E8402C] mx-auto mt-2" strokeWidth={1.5} />

      <p className="mt-3 text-[14px] font-bold text-[#123B7A] text-center leading-snug line-clamp-2">
        {name}
      </p>
      <p className="mt-2 text-[12px] text-slate-500 text-center leading-snug line-clamp-3">
        {address}
      </p>

      <div className="mt-auto pt-4 flex flex-col items-center gap-2">
        
         <a href={`tel:${phone.replace(/\s+/g, "")}`}
          className="text-[13px] font-bold text-[#E8402C] hover:underline"
        >
          {phone}
        </a>
        {mapUrl && (
          
          <a   href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#123B7A] hover:underline"
          >
            <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
            View on Map
          </a>
        )}
      </div>
    </div>
  );
}