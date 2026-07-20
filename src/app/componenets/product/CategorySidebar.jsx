export default function CategorySidebar({ categories, activeCategory, onSelect, variant = "vertical" }) {
  if (variant === "horizontal") {
    return (
      <div className="lg:hidden -mx-6 sm:-mx-10 px-6 sm:px-10 overflow-x-auto">
        <div className="flex gap-2 pb-3 w-max">
          <button
            onClick={() => onSelect?.("all")}
            className="shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold bg-[#123B7A] text-white"
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelect?.(cat.id)}
              aria-current={activeCategory === cat.id}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-semibold border transition-colors ${
                activeCategory === cat.id
                  ? "bg-[#E8402C] text-white border-[#E8402C]"
                  : "bg-white text-slate-700 border-slate-200"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block border border-slate-200 rounded-md overflow-hidden bg-white">
      <button
        onClick={() => onSelect?.("all")}
        className="w-full bg-[#123B7A] text-white font-semibold text-[15px] text-left px-5 py-3.5"
      >
        All Categories
      </button>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} className="border-t border-slate-200">
            <button
              onClick={() => onSelect?.(cat.id)}
              aria-current={activeCategory === cat.id}
              className={`w-full text-left px-5 py-3.5 text-[14px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#123B7A] ${
                activeCategory === cat.id
                  ? "text-[#E8402C] font-semibold bg-red-50"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {cat.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}