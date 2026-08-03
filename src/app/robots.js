// app/robots.js
// Next.js auto-generates /robots.txt from this file — no static file needed.
// This replaces whatever is currently blocking Google from crawling the site.

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://kmbakery.in/sitemap.xml",
  };
}