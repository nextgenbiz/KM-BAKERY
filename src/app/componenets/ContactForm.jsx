// "use client";
// import { useState } from "react";
// import { User, Phone, Mail, Tag, ChevronDown, MessageSquare, Send } from "lucide-react";

// const inputBase =
//   "w-full bg-white rounded-md pl-11 pr-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E8402C]";

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     enquiryType: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: wire this up to your API route
//     console.log(form);
//   };

//   return (
//     <div className="bg-[#123B7A] rounded-xl p-8">
//       <h2 className="text-white text-[22px] font-extrabold">Send Us a Message</h2>
//       <div className="mt-2 w-12 h-[3px] bg-[#E8402C]" />
//       <p className="mt-4 text-slate-200 text-[14px]">
//         Fill out the form and our team will get back to you shortly.
//       </p>

//       <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="relative">
//             <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className={inputBase} />
//           </div>
//           <div className="relative">
//             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputBase} />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="relative">
//             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
//             <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={inputBase} />
//           </div>
//           <div className="relative">
//             <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//             <select
//               name="enquiryType"
//               value={form.enquiryType}
//               onChange={handleChange}
//               className={`${inputBase} appearance-none`}
//             >
//               <option value="">Select Enquiry Type</option>
//               <option value="bulk-order">Bulk Order</option>
//               <option value="distribution">Distribution Partnership</option>
//               <option value="general">General Enquiry</option>
//             </select>
//             <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         <div className="relative">
//           <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows={5}
//             className={`${inputBase} resize-none pt-3.5`}
//           />
//         </div>

//         <button
//           type="submit"
//           className="inline-flex items-center gap-2 bg-[#E8402C] text-white font-semibold text-[14px] px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors"
//         >
//           Send Message
//           <Send className="w-4 h-4" strokeWidth={2} />
//         </button>
//       </form>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { User, Phone, Mail, Tag, ChevronDown, MessageSquare, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const inputBase =
  "w-full bg-white rounded-md pl-11 pr-4 py-3 text-[14px] text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E8402C]";

const inputError = "ring-2 ring-red-500";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  enquiryType: "",
  message: "",
  company: "", // honeypot — real users never fill this in, bots often do
};

function validate(form) {
  const errors = {};

  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  const phoneDigits = form.phone.replace(/[\s-]/g, "");
  if (!/^(\+91)?[6-9]\d{9}$/.test(phoneDigits)) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!form.enquiryType) {
    errors.enquiryType = "Please select an enquiry type.";
  }

  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // clear the error for this field as soon as the user edits it
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // honeypot tripped — silently pretend success, don't send anything
    if (form.company) {
      setStatus("success");
      setForm(initialForm);
      return;
    }

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#123B7A] rounded-xl p-8">
      <h2 className="text-white text-[22px] font-extrabold">Send Us a Message</h2>
      <div className="mt-2 w-12 h-[3px] bg-[#E8402C]" />
      <p className="mt-4 text-slate-200 text-[14px]">
        Fill out the form and our team will get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        {/* honeypot field — hidden from real users via CSS, not display:none
            (bots often skip fields that are display:none) */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px] w-px h-px opacity-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                aria-invalid={!!errors.name}
                className={`${inputBase} ${errors.name ? inputError : ""}`}
              />
            </div>
            {errors.name && (
              <p className="mt-1.5 text-[12px] text-red-300 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.name}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                aria-invalid={!!errors.phone}
                className={`${inputBase} ${errors.phone ? inputError : ""}`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1.5 text-[12px] text-red-300 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-invalid={!!errors.email}
                className={`${inputBase} ${errors.email ? inputError : ""}`}
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 text-[12px] text-red-300 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                name="enquiryType"
                value={form.enquiryType}
                onChange={handleChange}
                aria-invalid={!!errors.enquiryType}
                className={`${inputBase} appearance-none ${errors.enquiryType ? inputError : ""}`}
              >
                <option value="">Select Enquiry Type</option>
                <option value="bulk-order">Bulk Order</option>
                <option value="distribution">Distribution Partnership</option>
                <option value="general">General Enquiry</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
            {errors.enquiryType && (
              <p className="mt-1.5 text-[12px] text-red-300 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.enquiryType}
              </p>
            )}
          </div>
        </div>

        <div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              aria-invalid={!!errors.message}
              className={`${inputBase} resize-none pt-3.5 ${errors.message ? inputError : ""}`}
            />
          </div>
          {errors.message && (
            <p className="mt-1.5 text-[12px] text-red-300 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-[#E8402C] text-white font-semibold text-[14px] px-6 py-3 rounded-md hover:bg-[#d0331f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              Sending... <Loader2 className="w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Send Message <Send className="w-4 h-4" strokeWidth={2} />
            </>
          )}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-[13px] text-emerald-300">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Thanks! Your message has been sent — our team will get back to you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="flex items-center gap-2 text-[13px] text-red-300">
            <AlertCircle className="w-4 h-4 shrink-0" />
            Something went wrong sending your message. Please try again, or call us directly at +91 98099 69617.
          </p>
        )}
      </form>
    </div>
  );
}