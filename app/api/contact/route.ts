import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/sendEmail";

// In-memory store: IP -> { count, windowStart }
// Resets per serverless instance — sufficient to block burst abuse
const rateLimit = new Map<string, { count: number; windowStart: number }>();

const LIMIT = 3;         // max submissions
const WINDOW_MS = 60 * 60 * 1000; // per 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    rateLimit.set(ip, { count: 1, windowStart: now });
    return false;
  }

  if (entry.count >= LIMIT) return true;

  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, company, email, service, message } = body;

  if (!name?.trim() || !company?.trim() || !email?.trim() || !service || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 422 });
  }

  if (message.trim().length < 20) {
    return NextResponse.json({ error: "Message must be at least 20 characters" }, { status: 422 });
  }

  try {
    await sendContactEmail({
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: body.phone?.trim(),
      service,
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
