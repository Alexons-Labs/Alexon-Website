import { LOGO_VIEWBOX, MARK } from "@/lib/logo";

/**
 * The static mark. Inherits `currentColor`, so it flips to white inside
 * `.on-dark` sections with no second asset.
 */
export default function Logo({
  className = "",
  title = "Alexons",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <path d={MARK} fill="currentColor" />
    </svg>
  );
}
