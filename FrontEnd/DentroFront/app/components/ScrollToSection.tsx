"use client";

import { useEffect } from "react";

interface ScrollToSectionProps {
  slug?: string;
}

export default function ScrollToSection({ slug }: ScrollToSectionProps) {
  useEffect(() => {
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        // Small timeout ensures the element is ready and fully rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [slug]);

  return null;
}
