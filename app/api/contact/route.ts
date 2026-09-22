import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX = { name: 120, email: 200, brief: 2000 };

function clean(value: unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/**
 * Enquiry delivery via Resend.
 *
 * Required env vars (put them in `.env.local`, commit the names to
 * `.env.example`):
 *   RESEND_API_KEY=re_...                          — from resend.com/api-keys
 *   CONTACT_TO=alexonlabsofficial@gmail.com        — where enquiries land
 *   RESEND_FROM="Alexons <hello@alexon.in>"         — sender; must be a domain
 *                                                      verified in Resend, or
 *                                                      use onboarding@resend.dev
 *
 * If config is missing the route replies honestly instead of crashing, so the
 * form still behaves correctly during local development.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Honeypot trap: if filled, quietly succeed without dispatching
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data.name, MAX.name);
  const email = clean(data.email, MAX.email);
  const brief = clean(data.brief, MAX.brief);

  if (!name || !email || !brief) {
    return NextResponse.json(
      { ok: false, error: "Please fill in every field." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email doesn't look right." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "alexonlabsofficial@gmail.com";
  const from = process.env.RESEND_FROM || "Alexons <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn("[alexons/contact] RESEND_API_KEY not set — enquiry not sent", {
      name,
      email,
    });
    return NextResponse.json(
      { ok: false, error: "Messages aren't being delivered yet. Please email us directly at " + to },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${brief}`,
    });

    if (error) {
      console.error("[alexons/contact] resend error", error);
      return NextResponse.json(
        { ok: false, error: "Couldn't send right now. Please try again shortly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[alexons/contact] send failed", err);
    return NextResponse.json(
      { ok: false, error: "Couldn't send right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}