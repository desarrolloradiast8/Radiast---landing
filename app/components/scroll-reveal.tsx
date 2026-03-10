"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Pequeño delay para asegurar que el DOM está completamente renderizado
    const timer = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main, section, article, footer"
        )
      ).filter((element) => !element.hasAttribute("data-no-reveal"));

      // Aplicar clase de animación inicial a todos los elementos
      elements.forEach((element) => {
        element.classList.add("scroll-rise");
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px 100px 0px",
        }
      );

      // Observar todos los elementos
      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
