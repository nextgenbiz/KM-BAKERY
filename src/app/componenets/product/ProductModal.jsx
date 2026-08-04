"use client";
import { X, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProductModal({ product, onClose }) {
  const router = useRouter();
  if (!product) return null;

  const handleContactClick = () => {
  sessionStorage.setItem("prefillEnquiryType", "general");
  sessionStorage.setItem("scrollToContact", "true");
  onClose();
  router.push("/contact");
};

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-xl p-8 shadow-2xl animate-[fadeIn_.25s_ease]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-72 h-72 object-contain mx-auto transition-transform duration-300 hover:scale-110"
        />

        <h2 className="mt-6 text-3xl font-bold text-center text-[#123B7A]">
          {product.name}
        </h2>

        <button
          onClick={handleContactClick}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#E8402C] text-white font-semibold text-[14px] px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Enquire About This Product
        </button>
      </div>
    </div>
  );
}