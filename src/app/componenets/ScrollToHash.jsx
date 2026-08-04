"use client";
import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash === "#contact") {
      const timer = setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}