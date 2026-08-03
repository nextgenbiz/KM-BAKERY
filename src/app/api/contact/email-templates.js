// app/api/contact/email-templates.js
// Two branded HTML email templates used by the /api/contact route.
// Kept as plain inline-styled HTML strings — this is the most reliable
// approach across email clients (Gmail/Outlook strip <style> blocks a lot).

const ENQUIRY_LABELS = {
  "bulk-order": "Bulk Order",
  distribution: "Distribution Partnership",
  general: "General Enquiry",
};

function layout({ preheader, bodyHtml }) {
  return `
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:24px 0;font-family:Arial,Helvetica,sans-serif;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:#123B7A;padding:24px 32px;">
              <span style="color:#ffffff;font-size:18px;font-weight:800;letter-spacing:0.3px;">K.M. BAKERY &amp; FOOD PRODUCT</span>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;color:#1f2937;font-size:14px;line-height:1.6;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;padding:20px 32px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;line-height:1.6;">
              Arakkal Mall, Kadappadi, Peruvallur P.O., Malappuram, Kerala - 673638<br>
              +91 98099 69617 &nbsp;|&nbsp; info@kmbakery.com &nbsp;|&nbsp; kmbakery.in
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`;
}

// Email #1 — sent TO the business (info@kmbakery.com), notifying of a new enquiry
export function businessNotificationEmail({ name, phone, email, enquiryType, message }) {
  const enquiryLabel = ENQUIRY_LABELS[enquiryType] || enquiryType;

  const bodyHtml = `
    <h2 style="margin:0 0 16px;font-size:18px;color:#123B7A;">New Website Enquiry</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td style="padding:8px 0;color:#6b7280;width:120px;">Name</td>
        <td style="padding:8px 0;font-weight:600;">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#6b7280;">Phone</td>
        <td style="padding:8px 0;"><a href="tel:${escapeHtml(phone)}" style="color:#123B7A;text-decoration:none;">${escapeHtml(phone)}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#6b7280;">Email</td>
        <td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#123B7A;text-decoration:none;">${escapeHtml(email)}</a></td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#6b7280;">Enquiry Type</td>
        <td style="padding:8px 0;">
          <span style="background:#E8402C;color:#fff;padding:2px 10px;border-radius:12px;font-size:12px;font-weight:600;">${escapeHtml(enquiryLabel)}</span>
        </td>
      </tr>
    </table>
    <div style="background:#f9fafb;border-left:3px solid #E8402C;padding:12px 16px;border-radius:4px;">
      <p style="margin:0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
      <p style="margin:8px 0 0;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Submitted via the kmbakery.in contact form on ${new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })} (IST).</p>
  `;

  return {
    subject: `New Enquiry (${enquiryLabel}) from ${name} — kmbakery.in`,
    html: layout({ preheader: `New ${enquiryLabel} enquiry from ${name}`, bodyHtml }),
  };
}

// Email #2 — sent TO the customer who filled the form, confirming receipt
export function customerConfirmationEmail({ name, enquiryType, message }) {
  const enquiryLabel = ENQUIRY_LABELS[enquiryType] || enquiryType;

  const bodyHtml = `
    <h2 style="margin:0 0 16px;font-size:18px;color:#123B7A;">Thanks for reaching out, ${escapeHtml(name)}!</h2>
    <p style="margin:0 0 16px;">
      We've received your <strong>${escapeHtml(enquiryLabel)}</strong> enquiry and our team will get back to you shortly —
      usually within one business day.
    </p>
    <div style="background:#f9fafb;border-left:3px solid #123B7A;padding:12px 16px;border-radius:4px;margin-bottom:16px;">
      <p style="margin:0;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Your message</p>
      <p style="margin:8px 0 0;white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
    <p style="margin:0 0 16px;">
      Need to reach us sooner? Call us directly at
      <a href="tel:+919809969617" style="color:#123B7A;text-decoration:none;font-weight:600;">+91 98099 69617</a>.
    </p>
    <p style="margin:0;">— Team K.M. Bakery &amp; Food Product</p>
  `;

  return {
    subject: "We've received your enquiry — K.M. Bakery & Food Product",
    html: layout({ preheader: "We've received your enquiry and will be in touch shortly.", bodyHtml }),
  };
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}