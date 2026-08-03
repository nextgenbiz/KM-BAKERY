// app/sitemap.js
// Next.js auto-generates /sitemap.xml from this file at kmbakery.in/sitemap.xml

export default function sitemap() {
  return [
    {
      url: "https://kmbakery.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://kmbakery.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://kmbakery.in/products",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://kmbakery.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}