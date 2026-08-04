"use client";
import { useEffect } from "react";
import ContactForm from "./ContactForm";
import GetInTouchCard from "./GetInTouchCard";
import FollowPerksCard from "./FollowPerksCard";

export default function ContactFormSection() {
  useEffect(() => {
    if (sessionStorage.getItem("scrollToContact")) {
      sessionStorage.removeItem("scrollToContact");
      requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  return (
    <section id="contact" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 py-14 grid grid-cols-1 lg:grid-cols-[1.6fr_auto_auto] gap-6 items-start justify-start">
        <ContactForm />
        <GetInTouchCard />
        <FollowPerksCard />
      </div>
    </section>
  );
}