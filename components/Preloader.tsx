"use client";

import { useEffect, useState } from "react";
import LogoDraw from "./LogoDraw";

/**
 * Black screen → mark draws itself → curtain lifts.
 *
 * Timeline (matches the mask delays in LogoDraw):
 *   0.30s  sharp ascent begins        1.34s  loop closes
 *   0.72s  loop begins                1.48s  flourish lands
 *   1.60s  curtain lifts              2.05s  page interactive
 *
 * The curtain is rendered on the server and hidden by CSS on `[data-intro=done]`,
 * not mounted from an effect — mounting it later would let the hero paint for a
 * frame before the black covered it.
 *
 * Plays once per tab: an intro is charming the first time and an obstacle the
 * fourth.
 */
const LIFT_AT = 1600;
const DONE_AT = 2050;

export default function Preloader() {
  const [phase, setPhase] = useState<"cover" | "lifting" | "gone">("cover");

  useEffect(() => {
    const root = document.documentElement;

    const settle = () => {
      root.dataset.intro = "done";
      try {
        sessionStorage.setItem("alexons-intro", "done");
      } catch {
        /* private mode — the intro simply plays again next visit */
      }
    };

    const skip =
      root.dataset.intro === "done" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (skip) {
      settle();
      setPhase("gone");
      return;
    }

    document.body.classList.add("no-scroll");
    const lift = window.setTimeout(() => setPhase("lifting"), LIFT_AT);
    const finish = window.setTimeout(() => {
      setPhase("gone");
      document.body.classList.remove("no-scroll");
      settle();
    }, DONE_AT);

    return () => {
      window.clearTimeout(lift);
      window.clearTimeout(finish);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      aria-hidden
      className={`preloader fixed inset-0 z-[100] grid place-items-center bg-ink transition-transform duration-[900ms] ${
        phase === "lifting" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ transitionTimingFunction: "var(--ease-in-out-quart)" }}
    >
      <LogoDraw
        id="intro"
        className="w-[38vw] max-w-[300px] min-w-[150px] text-paper"
      />
    </div>
  );
}
