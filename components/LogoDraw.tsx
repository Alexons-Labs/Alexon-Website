import { FLOURISH, LOGO_VIEWBOX, MARK, MASK_STROKE, PEAK, SWEEP } from "@/lib/logo";

/**
 * The mark drawn the way it was made: the sharp ascent first, then the smooth
 * loop, then the flourish trailing off.
 *
 * The three centrelines are never painted — they are stroked inside a mask and
 * revealed with `stroke-dashoffset`, so the fill keeps its calligraphic weight
 * instead of degrading into a uniform outline. `pathLength="1"` normalises each
 * gesture, so a dash offset of 1 is "undrawn" regardless of real arc length.
 */
export default function LogoDraw({
  id,
  className = "",
  title = "Alexons",
}: {
  id: string;
  className?: string;
  title?: string;
}) {
  const maskId = `${id}-mask`;

  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role="img"
      aria-label={title}
      fill="none"
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="100" y="85" width="426" height="386">
          <g
            fill="none"
            stroke="#fff"
            strokeWidth={MASK_STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={PEAK}
              pathLength={1}
              className="draw"
              style={{ "--draw-delay": "0.30s", "--draw-dur": "0.45s" } as React.CSSProperties}
            />
            <path
              d={SWEEP}
              pathLength={1}
              className="draw"
              style={{ "--draw-delay": "0.72s", "--draw-dur": "0.62s" } as React.CSSProperties}
            />
            <path
              d={FLOURISH}
              pathLength={1}
              className="draw"
              style={{ "--draw-delay": "1.10s", "--draw-dur": "0.38s" } as React.CSSProperties}
            />
          </g>
        </mask>
      </defs>
      <path d={MARK} fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}
