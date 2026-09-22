"use client";

import { useState } from "react";
import { EMAIL as SUPPORT_EMAIL } from "@/lib/nav";

type Errors = {
  name?: string;
  email?: string;
  resume?: string;
};

export default function CareersForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const next: Errors = {};
    if (!name.trim()) {
      next.name = "Please tell us your name.";
    }
    if (!email.trim()) {
      next.email = "We need a way to reach you, so add your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "That email address does not look right.";
    }
    if (!resume) {
      next.resume = "Attach your resume so we can review it.";
    } else if (resume.size > 5 * 1024 * 1024) {
      next.resume = "Please keep the file under 5MB.";
    } else if (!/\.(pdf|doc|docx)$/i.test(resume.name)) {
      next.resume = "PDF, DOC or DOCX only.";
    }
    return next;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    setServerError("");

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("email", email.trim());
    formData.append("company_website", website);
    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Failed to submit application.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "Something went wrong submitting your application. Please try again.",
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="mt-14 rounded-2xl border border-line bg-paper p-8 md:p-12">
        <p className="eyebrow text-mid">Application Received</p>
        <h3 className="display mt-4 text-2xl md:text-3xl">Thanks, {name.trim()}.</h3>
        <p className="mt-4 max-w-[48ch] leading-relaxed text-dark">
          We have received your application and resume. Our team reviews submissions regularly and
          will get in touch if your background aligns with our open roles.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 border-t border-line pt-14">
      <p className="eyebrow text-mid">Send Your Resume / Apply</p>
      <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-y-8 md:grid-cols-12 md:gap-x-10">
        {/* Invisible bot honeypot */}
        <div aria-hidden="true" className="hidden" style={{ display: "none" }}>
          <label htmlFor="careers-website">Website</label>
          <input
            id="careers-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="md:col-span-6">
          <label htmlFor="careers-name" className="eyebrow block text-mid">
            Name <span className="text-ink">*</span>
          </label>
          <input
            id="careers-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 w-full border-b border-line bg-transparent pb-3 text-lg text-dark outline-none transition-colors duration-300 focus:border-ink"
            autoComplete="name"
          />
          {errors.name && <p className="mt-2 text-sm text-ink">{errors.name}</p>}
        </div>

        <div className="md:col-span-6">
          <label htmlFor="careers-email" className="eyebrow block text-mid">
            Email <span className="text-ink">*</span>
          </label>
          <input
            id="careers-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3 w-full border-b border-line bg-transparent pb-3 text-lg text-dark outline-none transition-colors duration-300 focus:border-ink"
            autoComplete="email"
          />
          {errors.email && <p className="mt-2 text-sm text-ink">{errors.email}</p>}
        </div>

        <div className="md:col-span-12">
          <label htmlFor="careers-resume" className="eyebrow block text-mid">
            Resume <span className="text-ink">*</span>
          </label>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <input
              id="careers-resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setResume(file);
              }}
              className="block text-sm text-dark file:mr-4 file:cursor-pointer file:rounded-full file:border file:border-line file:bg-ink file:px-5 file:py-2.5 file:font-sans file:text-xs file:font-medium file:uppercase file:tracking-wider file:text-paper file:transition-colors file:hover:bg-transparent file:hover:text-ink"
            />
            {resume && (
              <span className="eyebrow text-sm text-dark">
                Selected: <span className="font-semibold">{resume.name}</span> ({(resume.size / 1024).toFixed(0)} KB)
              </span>
            )}
          </div>
          <p className="mt-2 text-xs text-mid">PDF, DOC, or DOCX up to 5 MB</p>
          {errors.resume && <p className="mt-2 text-sm text-ink">{errors.resume}</p>}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-12">
          {serverError && <p className="text-sm text-ink">{serverError}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="btn btn-solid group ml-auto"
          >
            {status === "submitting" ? "Submitting Application..." : "Submit Application"}
            <span className="arrow arrow-ne">&#8599;</span>
          </button>
        </div>
      </form>
    </div>
  );
}
