import BranchCard from "./BranchCard";
import branches from "../data/branchesData";

export default function BranchesSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="text-center">
          <div className="w-10 h-[3px] bg-[#E8402C] mx-auto mb-3" />
          <h2 className="text-[24px] font-extrabold text-slate-900">
            Our Branches Across Kerala
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {branches.map((branch) => (
            <BranchCard
              key={branch.id}
              number={branch.id}
              name={branch.name}
              address={branch.address}
              phone={branch.phone}
              mapUrl={branch.mapUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
}