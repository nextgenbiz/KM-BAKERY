// app/api/contact/route.js
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { businessNotificationEmail, customerConfirmationEmail } from "./email-templates";

const resend = new Resend(process.env.RESEND_API_KEY);

const BUSINESS_EMAIL = process.env.BUSINESS_NOTIFICATION_EMAIL || "info@kmbakery.com";
// Must be an address on a domain you've verified in Resend (e.g. no-reply@kmbakery.in).
// Until your domain is verified, Resend only lets you send from onboarding@resend.dev.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "K.M. Bakery <onboarding@resend.dev>";

function validate(body) {
  const errors = {};
  const { name, phone, email, enquiryType, message } = body || {};

  if (!name || name.trim().length < 2) errors.name = "Invalid name.";

  const phoneDigits = (phone || "").replace(/[\s-]/g, "");
  if (!/^(\+91)?[6-9]\d{9}$/.test(phoneDigits)) errors.phone = "Invalid phone number.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((email || "").trim())) errors.email = "Invalid email.";

  if (!["bulk-order", "distribution", "general"].includes(enquiryType)) {
    errors.enquiryType = "Invalid enquiry type.";
  }

  if (!message || message.trim().length < 10) errors.message = "Message too short.";

  return errors;
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // honeypot — if the hidden "company" field is filled, silently accept
  // (so bots think they succeeded) without sending any email
  if (body.company) {
    return NextResponse.json({ success: true });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Validation failed.", errors }, { status: 400 });
  }

  const { name, phone, email, enquiryType, message } = body;

  try {
    const business = businessNotificationEmail({ name, phone, email, enquiryType, message });
    const customer = customerConfirmationEmail({ name, enquiryType, message });

    // Send both emails in parallel
    const [businessResult, customerResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: BUSINESS_EMAIL,
        replyTo: email, // lets staff hit "reply" and go straight to the customer
        subject: business.subject,
        html: business.html,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: customer.subject,
        html: customer.html,
      }),
    ]);

    if (businessResult.error || customerResult.error) {
      console.error("Resend error:", businessResult.error, customerResult.error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}