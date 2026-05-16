import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/sendEmail";

export async function POST(req: NextRequest) {
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
