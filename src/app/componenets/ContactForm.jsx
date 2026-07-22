"use client";
import { useState } from "react";
import { User, Phone, Mail, Tag, ChevronDown, MessageSquare, Send } from "lucide-react";

const inputBase =
  "w-full bg-white rounded-md pl-11 pr-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E8402C]";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your API route
    console.log(form);
  };

  return (
    <div className="bg-[#123B7A] rounded-xl p-8">
      <h2 className="text-white text-[22px] font-extrabold">Send Us a Message</h2>
      <div className="mt-2 w-12 h-[3px] bg-[#E8402C]" />
      <p className="mt-4 text-slate-200 text-[14px]">
        Fill out the form and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className={inputBase} />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputBase} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={inputBase} />
          </div>
          <div className="relative">
            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select
              name="enquiryType"
              value={form.enquiryType}
              onChange={handleChange}
              className={`${inputBase} appearance-none`}
            >
              <option value="">Select Enquiry Type</option>
              <option value="bulk-order">Bulk Order</option>
              <option value="distribution">Distribution Partnership</option>
              <option value="general">General Enquiry</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className={`${inputBase} resize-none pt-3.5`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-[#E8402C] text-white font-semibold text-[14px] px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors"
        >
          Send Message
          <Send className="w-4 h-4" strokeWidth={2} />
        </button>
      </form>
    </div>
  );
}