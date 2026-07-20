import { Gift } from "lucide-react";

export default function ProductCard({ number, name, image, comingSoon }) {
  if (comingSoon) {
    return (
      <div className="relative border border-dashed border-slate-300 rounded-md p-4 flex flex-col items-center justify-center text-center h-full min-h-[150px]">
        <Gift className="w-8 h-8 text-[#123B7A]" strokeWidth={1.5} />
        <p className="mt-3 text-[13px] text-slate-500">
          (More Varieties Coming Soon)
        </p>
      </div>
    );
  }

  return (
    <div className="relative border border-slate-200 rounded-md p-4 flex flex-col items-center text-center bg-white hover:shadow-md transition-shadow">
      <span className="absolute top-2 left-2 w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-semibold flex items-center justify-center">
        {number}
      </span>
      <img src={image} alt={name} className="w-full h-24 object-contain mt-2" />
      <p className="mt-3 text-[13px] font-semibold text-slate-800 leading-snug">
        {name}
      </p>
    </div>
  );
}