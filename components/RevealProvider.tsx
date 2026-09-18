"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * One observer for the whole page. Any element with `.reveal` or `.reveal-line`
 * gets `.is-visible` the first time it enters the viewport, so sections stay
 * server components and only carry a class name.
 *
 * Re-keyed on the pathname: after a client-side navigation the new page's
 * reveal elements arrive in the DOM after this observer's effect already ran,
 * so without re-scanning they would stay permanently hidden.
 */
export default function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal:not(.is-visible), .reveal-line:not(.is-visible)",
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
