"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const brands = [
  { name: "Roja", img: "/logos/1.png" },
  { name: "LEO", img: "/logos/2.png" },
  { name: "Mercely's", img: "/logos/3.png" },
  { name: "Oshon", img: "/logos/4.png" },
  { name: "HUGS", img: "/logos/5.png" },
  { name: "Allwin", img: "/logos/6.png" },
  { name: "Alpenliebe", img: "/logos/7.png" },
  { name: "Bharat Gold", img: "/logos/8.png" },
  { name: "Marino", img: "/logos/9.png" },
  { name: "Glacier", img: "/logos/10.png" },
  { name: "yuMMy", img: "/logos/11.png" },
  { name: "Bakemate", img: "/logos/12.png" },
  { name: "American Snacks", img: "/logos/13.png" },
  { name: "Primiyo", img: "/logos/14.png" },
  { name: "alfmin", img: "/logos/15.png" },
  { name: "Kamco", img: "/logos/16.png" },
  { name: "au'some", img: "/logos/17.png" },
  { name: "HoPPiN'", img: "/logos/18.png" },
  { name: "Madhur", img: "/logos/19.png" },
  { name: "K&G", img: "/logos/20.png" },
];

export default function BrandPartners() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-18">
          <p className="text-[#E8402C] font-semibold text-[13px] tracking-wide uppercase mb-3">
            Trusted Super Stockist
          </p>

          <h2 className="text-[#0B2748] text-2xl md:text-3xl font-extrabold">
            Brands We Proudly Distribute Across Kerala
          </h2>

          <p className="text-slate-500 text-[15px] mt-3 max-w-xl mx-auto">
            As Kerala&apos;s trusted super stockist, we supply leading brands
            to retailers and supermarkets statewide.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.name}>
              <div className="h-28 flex items-center justify-center px-6 hover:-translate-y-1 transition-all duration-300">
                <Image
                  src={brand.img}
                  alt={brand.name}
                  width={140}
                  height={70}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}