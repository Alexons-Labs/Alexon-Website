"use client";

import { useState } from "react";
import { EMAIL, SOCIALS } from "@/lib/nav";

type Status = "idle" | "sending" | "sent" | "error";

const FIELDS = [
  { name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { name: "email", label: "Your email", type: "email", autoComplete: "email" },
  { name: "brief", label: "What are you building?", type: "text", autoComplete: "off" },
] as const;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) throw new Error(data.error ?? "Something went wrong.");

      form.reset();
      setStatus("sent");
      setMessage("Thanks — we'll be in touch shortly.");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section id="contact" className="band border-t border-line">
      <div className="shell grid gap-y-16 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <p className="eyebrow reveal text-mid">Contact</p>

          <h2 className="display display-lg mt-8">
            <span className="reveal-line">
              <span>Have An Idea?</span>
            </span>
            <span className="reveal-line" style={{ "--reveal-delay": "110ms" } as React.CSSProperties}>
              <span>Let&rsquo;s Build It.</span>
            </span>
          </h2>

          <div className="reveal mt-14" style={{ "--reveal-delay": "260ms" } as React.CSSProperties}>
            <a href={`mailto:${EMAIL}`} className="link-sweep display text-xl normal-case">
              {EMAIL}
            </a>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="eyebrow link-sweep text-mid"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal lg:col-span-6 lg:col-start-7"
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          {FIELDS.map((field) => (
            <p key={field.name} className="group mb-10">
              <label htmlFor={field.name} className="eyebrow block text-mid">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required
                autoComplete={field.autoComplete}
                className="mt-4 w-full border-b border-line bg-transparent pb-3 text-lg outline-none transition-colors duration-500 focus:border-ink"
              />
            </p>
          ))}

          <div className="mt-12 flex flex-wrap items-center justify-end gap-6">
            {message && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status === "error" ? "text-ink" : "text-mid"}`}
              >
                {message}
              </p>
            )}

            <button type="submit" disabled={status === "sending"} className="btn btn-solid group">
              {status === "sending" ? "Sending" : "Send"}
              <span className="arrow arrow-x">&#8594;</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
