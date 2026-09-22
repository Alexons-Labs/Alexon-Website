import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const honeypot = (formData.get("company_website") as string)?.trim() ?? "";
    if (honeypot) {
      // Quietly succeed to trap spambots
      return NextResponse.json({ ok: true });
    }

    const name = (formData.get("name") as string)?.trim() ?? "";
    const email = (formData.get("email") as string)?.trim() ?? "";
    const resume = formData.get("resume") as File | null;

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Please provide both your name and email." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!resume || !(resume instanceof File)) {
      return NextResponse.json(
        { ok: false, error: "Please attach your resume file." },
        { status: 400 },
      );
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { ok: false, error: "Resume file must be under 5MB." },
        { status: 400 },
      );
    }

    const fileName = resume.name.toLowerCase();
    const isAllowed = ALLOWED_EXTENSIONS.some((ext) => fileName.endsWith(ext));
    if (!isAllowed) {
      return NextResponse.json(
        { ok: false, error: "Only PDF, DOC, or DOCX formats are accepted." },
        { status: 400 },
      );
    }

    // Server-side logging / transactional provider staging
    console.info("[alexons/careers]", {
      name,
      email,
      resumeName: resume.name,
      resumeSize: `${(resume.size / 1024).toFixed(1)} KB`,
      receivedAt: new Date().toISOString(),
    });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "alexonlabsofficial@gmail.com";
    const from = process.env.RESEND_FROM || "Alexons <onboarding@resend.dev>";

    if (apiKey) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(apiKey);
        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const { error } = await resend.emails.send({
          from,
          to,
          replyTo: email,
          subject: `Job Application / Resume from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nAttached resume: ${resume.name}`,
          attachments: [
            {
              filename: resume.name,
              content: buffer,
            },
          ],
        });

        if (error) {
          console.error("[alexons/careers] resend error", error);
        }
      } catch (sendErr) {
        console.error("[alexons/careers] resend dispatch error", sendErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[alexons/careers/error]", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred while processing your application." },
      { status: 500 },
    );
  }
}
