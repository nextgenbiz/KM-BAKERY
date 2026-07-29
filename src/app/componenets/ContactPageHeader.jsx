export default function ContactPageHeader({ bgImage = "/contactlogo.png" }) {
  return (
<section className="relative w-full h-[520px] sm:h-[420px] bg-[#F7F6F4] overflow-hidden">
        <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="K.M. Bakery warehouse"
          className="w-full h-full object-cotin"
        />
        {/* Fade from left so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F4] via-[#F7F6F4]/10 to-transparent" />
      </div>

      <div className="relative h-full max-w-[1280px] mx-auto px-6 flex flex-col justify-center">
  <p className="text-[#E8402C] font-semibold text-[12px] sm:text-[13px] uppercase tracking-[0.15em] mb-2 sm:mb-3">
    Contact Us
  </p>

  <h1
    className="text-[#123B7A]
               text-[2.25rem] leading-[1.1]
               sm:text-3xl
               lg:text-[2.4rem]
               font-extrabold
               max-w-lg"
  >
    We're Here
    <br />
    <span className="text-[#E8402C]">To Help You!</span>
  </h1>

  <p className="mt-5 text-[16px] sm:text-[15px] text-black/70 max-w-md leading-relaxed">
    Get in touch with us for bulk orders, wholesale distribution,
    partnerships, or any product enquiries. Our team is ready to assist
    you with the best solutions for your business.
  </p>
</div>
    </section>
  );
}