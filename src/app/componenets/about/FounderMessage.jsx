export default function FounderMessage({
  photo = "/about/founder.jpeg",
  founderName = "Koyamon Kondadan",
  founderTitle = "Founder & Chairman ",
}) {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 items-center">
        {/* Photo */}
        <div className="relative w-full max-w-[300px] mx-auto lg:mx-0">
          {/* Decorative backdrop shape so the white-background headshot has definition */}
          <div className="absolute -top-4 -left-4 w-full h-full bg-[#123B7A]/10 rounded-2xl -z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E8402C]/15 rounded-2xl -z-10" />

          <img
            src={photo}
            alt={founderName}
            className="w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-lg border-4 border-white"
          />

          {/* Name/title tag overlapping the bottom edge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-lg shadow-md border-l-4 border-[#E8402C] px-4 py-3 text-center">
            <p className="text-[#0B2748] font-bold text-[14px] leading-tight">{founderName}</p>
            <p className="text-slate-500 text-[12px]">{founderTitle}</p>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 lg:mt-0">
          <p className="text-[#E8402C] font-semibold text-[13px] uppercase tracking-wide mb-3">
            A Message From Our Founder
          </p>
          <h2 className="text-[#0B2748] text-2xl lg:text-3xl font-extrabold leading-tight mb-6">
            Built on <span className="text-[#E8402C]">Trust</span>, Delivered
            <br />
            with <span className="text-[#123B7A]">Commitment</span>
          </h2>
          <p className="text-slate-600 text-[15px] leading-relaxed mb-4">
            K.M. Bakery &amp; Food Product was founded with a simple vision — to become
            Kerala&apos;s most trusted name in the wholesale distribution of bakery and food
            products. Over the years, our unwavering focus on quality, timely delivery and
            customer satisfaction has helped us build strong relationships with thousands of
            retailers and supermarkets across the state.
          </p>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            We take pride in partnering with leading brands and importing premium products from
            Dubai to bring you the best of global flavours.
            <br />
            Thank you for trusting us. We look forward to growing together.
          </p>
        </div>
      </div>
    </section>
  );
}