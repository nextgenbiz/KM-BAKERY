export default function ContactPageHeader({ bgImage = "/contactlogo.png" }) {
  return (
    <section className="relative w-full h-[280px] sm:h-[420px] bg-[#F7F6F4] overflow-hidden">
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
        <p className="text-[#E8402C] font-semibold text-[13px] uppercase tracking-wide mb-3">
          Contact Us
        </p>

        <h1 className="text-[#0B2748] text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold leading-tight max-w-lg">
          We're Here
          <br />
          <span className="text-[#E8402C]">To Help You!</span>
        </h1>

        <p className="text-black/70 text-[14px] max-w-md mt-4">
          Get in touch with us for bulk orders, wholesale distribution,
          partnerships, or any product enquiries. Our team is ready to assist
          you with the best solutions for your business.
        </p>
      </div>
    </section>
  );
}