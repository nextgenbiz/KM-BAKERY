import { Gift } from "lucide-react";

export default function ProductCard({
  number,
  name,
  image,
  comingSoon,
  onClick,
}) {  if (comingSoon) {
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
    <div onClick={onClick}
    className="group relative border border-slate-200 rounded-md p-4 flex flex-col items-center text-center bg-white transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-[#123B7A]/20 cursor-pointer">
      <span className="absolute top-2 left-2 w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-semibold flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        {number}
      </span>

      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-24 object-contain mt-2 transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>

      <p className="mt-3 text-[13px] font-semibold text-slate-800 leading-snug transition-all duration-300 ease-out group-hover:scale-105 group-hover:text-[#123B7A]">
        {name}
      </p>
    </div>
  );
}