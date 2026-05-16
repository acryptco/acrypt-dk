import { Resend } from "resend";

export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY env var is not set");

  const to = process.env.CONTACT_EMAIL;
  if (!to) throw new Error("CONTACT_EMAIL env var is not set");

  const resend = new Resend(apiKey);
  const serviceLabel = payload.service || "Not specified";

  const { error } = await resend.emails.send({
    from: "Acrypt Contact Form <noreply@acrypt.dk>",
    to,
    replyTo: payload.email,
    subject: `New enquiry from ${payload.name} — ${payload.company}`,
    text: [
      `Name: ${payload.name}`,
      `Company: ${payload.company}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "—"}`,
      `Service: ${serviceLabel}`,
      "",
      `Message:`,
      payload.message,
    ].join("\n"),
    html: `
      <table style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#1A1A1A;max-width:600px;margin:0 auto;border:1px solid #E5E3DC;border-radius:8px;overflow:hidden">
        <tr><td style="background:#085041;padding:20px 24px">
          <span style="color:#ffffff;font-size:20px;font-weight:700">Acrypt</span>
          <span style="color:rgba(255,255,255,0.6);font-size:13px;margin-left:12px">New contact enquiry</span>
        </td></tr>
        <tr><td style="padding:24px">
          <table style="width:100%;border-collapse:collapse">
            ${[
              ["Name", payload.name],
              ["Company", payload.company],
              ["Email", `<a href="mailto:${payload.email}" style="color:#085041">${payload.email}</a>`],
              ["Phone", payload.phone || "—"],
              ["Service", serviceLabel],
            ]
              .map(
                ([k, v]) =>
                  `<tr><td style="padding:6px 0;width:100px;color:#5F5E5A;font-size:13px;vertical-align:top">${k}</td><td style="padding:6px 0;font-weight:500">${v}</td></tr>`
              )
              .join("")}
          </table>
          <hr style="border:none;border-top:1px solid #E5E3DC;margin:20px 0">
          <p style="color:#5F5E5A;font-size:13px;margin:0 0 8px">Message</p>
          <p style="margin:0;white-space:pre-line">${payload.message}</p>
        </td></tr>
        <tr><td style="padding:16px 24px;background:#F7F6F3;font-size:12px;color:#5F5E5A">
          Sent via the contact form at acrypt.dk
        </td></tr>
      </table>
    `,
  });

  if (error) throw error;
}
