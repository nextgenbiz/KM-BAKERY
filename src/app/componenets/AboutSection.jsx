"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MapPin } from "lucide-react";

import "swiper/css";

const stats = [
  { value: "10,000+", label: "Happy Clients" },
  { value: "3000+", label: "Products" },
  { value: "50+", label: "Trusted Brands" },
  { value: "15+", label: "Years of Trust" },
];

const images = [
  { src: "/abouthome.png", location: "Kannur" },
  { src: "/Palakkad.jpeg", location: "Palakkad" },
  { src: "/Parambilpeedika.jpeg", location: "Parambil Peedika" },
  { src: "/Wayanad.jpeg", location: "Wayanad" },
  { src: "/Alappuzha.jpeg", location: "Alappuzha" },
  { src: "/Kollam.jpeg", location: "Kollam" },
  { src: "/about6.webp", location: "Malappuram" },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div>
          <p className="text-[#E8402C] font-semibold text-[13px] tracking-wide uppercase mb-3">
            About K.M. Bakery
          </p>

          <h2 className="text-[#0B2748] text-3xl font-extrabold leading-tight mb-5">
            Your Trusted Partner For Bakery &amp; Food Products
          </h2>

          <p className="text-slate-600 text-[15px] mb-4">
            <span className="font-semibold text-[#0B2748]">
              At K.M. Bakery,
            </span>{" "}
            we provide end-to-end solutions for businesses across Kerala with
            high-quality products and reliable wholesale services.
          </p>

          <p className="text-slate-600 text-[15px] mb-8">
            We are committed to freshness, quality, and timely delivery,
            ensuring customer satisfaction at every step.
          </p>

          <div className="grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[#E8402C] font-extrabold text-xl">
                  {s.value}
                </p>
                <p className="text-slate-500 text-[12px] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Slider */}
        <div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="rounded-[8px] shadow-lg"
          >
            {images.map((image, index) => (
             <SwiperSlide key={index}>
  <div className="relative">
    <img
      src={image.src}
      alt={image.location}
      className="w-full h-[380px] object-cover rounded-[8px]"
    />

    {/* Location Badge */}
    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/55 backdrop-blur-sm text-white px-4 py-2 rounded-full">
      <MapPin size={18} className="text-[#E8402C]" />
      <span className="text-sm font-medium">{image.location}</span>
    </div>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}