import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    const children = el.querySelectorAll(".section-reveal");
    for (const child of children) {
      observer.observe(child);
    }
    if (el.classList.contains("section-reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
