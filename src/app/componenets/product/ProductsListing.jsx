// "use client";
// import { useEffect, useRef, useState } from "react";
// import CategoryNav from "./CategorySidebar";
// import SidebarPromos from "./SidebarPromos";
// import ProductCategoryBlock from "./ProductCategoryBlock";
// import productCategories from "../../data/productsData";

// export default function ProductsListing() {
//   const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
//   const sectionRefs = useRef({});
//   const topRef = useRef(null);
//   const lastCategoryId = productCategories[productCategories.length - 1].id;

//   const [chocolates, biscuits, iceCream, baked] = productCategories;

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setActiveCategory(entry.target.dataset.categoryId);
//         });
//       },
//       { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
//     );

//     Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));

//     // Fallback: force-activate the last category once user nears the bottom
//     // of the page, since it may never get a clean intersection otherwise.
//     const handleScroll = () => {
//       const scrolledToBottom =
//         window.innerHeight + window.scrollY >= document.body.scrollHeight - 200;
//       if (scrolledToBottom) setActiveCategory(lastCategoryId);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastCategoryId]);

//   const handleSelect = (id) => {
//     if (id === "all") {
//       topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//       setActiveCategory(productCategories[0].id);
//       return;
//     }
//     const el = sectionRefs.current[id];
//     if (el) {
//       const y = el.getBoundingClientRect().top + window.scrollY - 100; // offset for sticky navbar
//       window.scrollTo({ top: y, behavior: "smooth" });
//       setActiveCategory(id);
//     }
//   };

//   return (
//     <section className="w-full bg-white" ref={topRef}>
//       <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 py-12 flex flex-col lg:flex-row gap-10">
//         {/* Mobile: compact horizontal chip nav, sits above the grid */}
//         <CategoryNav
//           variant="horizontal"
//           categories={productCategories}
//           activeCategory={activeCategory}
//           onSelect={handleSelect}
//         />

//         {/* Desktop: sticky nav + static promo cards in one left column */}
//         <aside className="hidden lg:block w-[280px] shrink-0">
//           <div className="sticky top-28 space-y-6">
//             <CategoryNav
//               variant="vertical"
//               categories={productCategories}
//               activeCategory={activeCategory}
//               onSelect={handleSelect}
//             />
//             <SidebarPromos />
//           </div>
//         </aside>

//         <div className="flex-1 space-y-12">
//           <div
//             id={chocolates.id}
//             data-category-id={chocolates.id}
//             ref={(el) => (sectionRefs.current[chocolates.id] = el)}
//           >
//             <ProductCategoryBlock
//               number={chocolates.number}
//               title={chocolates.title}
//               products={chocolates.products}
//               columns={6}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div
//               id={biscuits.id}
//               data-category-id={biscuits.id}
//               ref={(el) => (sectionRefs.current[biscuits.id] = el)}
//             >
//               <ProductCategoryBlock
//                 number={biscuits.number}
//                 title={biscuits.title}
//                 products={biscuits.products}
//                 columns={3}
//               />
//             </div>
//             <div
//               id={iceCream.id}
//               data-category-id={iceCream.id}
//               ref={(el) => (sectionRefs.current[iceCream.id] = el)}
//             >
//               <ProductCategoryBlock
//                 number={iceCream.number}
//                 title={iceCream.title}
//                 products={iceCream.products}
//                 columns={3}
//               />
//             </div>
//           </div>

//           <div
//             id={baked.id}
//             data-category-id={baked.id}
//             ref={(el) => (sectionRefs.current[baked.id] = el)}
//           >
//             <ProductCategoryBlock
//               number={baked.number}
//               title={baked.title}
//               products={baked.products}
//               columns={3}
//             />
//           </div>
//         </div>

//         {/* Mobile: promo cards after the grid, not before it */}
//         <div className="lg:hidden">
//           <SidebarPromos />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import CategoryNav from "./CategorySidebar";
import SidebarPromos from "./SidebarPromos";
import ProductCategoryBlock from "./ProductCategoryBlock";
import productCategories from "../../data/productsData";

// Normal, everyday colors — one per category, assigned by order not by id
const categoryColors = [
  "#F5EDE4", // 1st category (chocolates) - warm beige
  "#FDF3D9", // 2nd category (biscuits) - light yellow
  "#FCE8EC", // 3rd category (ice cream) - light pink
  "#F0EAE0", // 4th category (baked) - soft tan
];

function CategoryWrapper({ color, children }) {
  return (
    <div className="rounded-xl p-6" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}

export default function ProductsListing() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const sectionRefs = useRef({});
  const topRef = useRef(null);
  const lastCategoryId = productCategories[productCategories.length - 1].id;

  const [chocolates, biscuits, iceCream, baked] = productCategories;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveCategory(entry.target.dataset.categoryId);
        });
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));

    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 200;
      if (scrolledToBottom) setActiveCategory(lastCategoryId);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastCategoryId]);

  const handleSelect = (id) => {
    if (id === "all") {
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategory(productCategories[0].id);
      return;
    }
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveCategory(id);
    }
  };

  return (
    <section className="w-full bg-white" ref={topRef}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 py-12 flex flex-col lg:flex-row gap-10">
        <CategoryNav
          variant="horizontal"
          categories={productCategories}
          activeCategory={activeCategory}
          onSelect={handleSelect}
        />

        <aside className="hidden lg:block w-[280px] shrink-0">
          <div className="sticky top-28 space-y-6">
            <CategoryNav
              variant="vertical"
              categories={productCategories}
              activeCategory={activeCategory}
              onSelect={handleSelect}
            />
            <SidebarPromos />
          </div>
        </aside>

        <div className="flex-1 space-y-12">
          <div
            id={chocolates.id}
            data-category-id={chocolates.id}
            ref={(el) => (sectionRefs.current[chocolates.id] = el)}
          >
            <CategoryWrapper color={categoryColors[0]}>
              <ProductCategoryBlock
                number={chocolates.number}
                title={chocolates.title}
                products={chocolates.products}
                columns={5}
              />
            </CategoryWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              id={biscuits.id}
              data-category-id={biscuits.id}
              ref={(el) => (sectionRefs.current[biscuits.id] = el)}
            >
              <CategoryWrapper color={categoryColors[1]}>
                <ProductCategoryBlock
                  number={biscuits.number}
                  title={biscuits.title}
                  products={biscuits.products}
                  columns={3}
                />
              </CategoryWrapper>
            </div>
            <div
              id={iceCream.id}
              data-category-id={iceCream.id}
              ref={(el) => (sectionRefs.current[iceCream.id] = el)}
            >
              <CategoryWrapper color={categoryColors[2]}>
                <ProductCategoryBlock
                  number={iceCream.number}
                  title={iceCream.title}
                  products={iceCream.products}
                  columns={3}
                />
              </CategoryWrapper>
            </div>
          </div>

          <div
            id={baked.id}
            data-category-id={baked.id}
            ref={(el) => (sectionRefs.current[baked.id] = el)}
          >
            <CategoryWrapper color={categoryColors[3]}>
              <ProductCategoryBlock
                number={baked.number}
                title={baked.title}
                products={baked.products}
                columns={3}
              />
            </CategoryWrapper>
          </div>
        </div>

        <div className="lg:hidden">
          <SidebarPromos />
        </div>
      </div>
    </section>
  );
}