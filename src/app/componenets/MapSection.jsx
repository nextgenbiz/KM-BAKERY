import { MapPin, ArrowUpRight } from "lucide-react";

export default function MapSection() {
  const directionsUrl =
    "https://maps.app.goo.gl/GLQW2qrq1N3bLpPd7?g_st=ic";

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 py-12">
        <div className="relative rounded-xl overflow-hidden border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4929.610685830641!2d75.92418049999999!3d11.1028938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64e7390299963%3A0xc01498e890728791!2sIntimate%20Bakery%20Wholsale%20%26%20Retail!5e1!3m2!1sen!2sin!4v1785300362839!5m2!1sen!2sin"
            title="INTIMATE BAKERY Location"
            className="w-full h-[380px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          
        </div>
      </div>
    </section>
  );
}