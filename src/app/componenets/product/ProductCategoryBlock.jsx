import ProductCard from "./ProductCard";

export default function ProductCategoryBlock({ number, title, products, columns = 6 }) {
  const colsClass =
    columns === 3
      ? "grid-cols-2 sm:grid-cols-3"
      : columns === 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

  return (
    <div>
      <h2 className="text-[20px] sm:text-[22px] font-bold text-[#123B7A]">
        {number}. {title}
      </h2>
      <div className="mt-2 border-b border-slate-200" />
      <div className={`mt-5 grid ${colsClass} gap-5`}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            number={p.id}
            name={p.name}
            image={p.image}
            comingSoon={p.comingSoon}
          />
        ))}
      </div>
    </div>
  );
}