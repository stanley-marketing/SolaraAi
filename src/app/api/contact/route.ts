import { NextResponse } from "next/server";

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const TO_EMAIL = "ilay.mor@solaraai.com";
const FROM_EMAIL = "contact@solaraai.com";
const FROM_NAME = "Solara AI Website";

interface ContactPayload {
  fullName: string;
  email: string;
  website?: string;
  phone?: string;
  location?: string;
  budget?: string;
  message: string;
}

function buildHtml(data: ContactPayload): string {
  const rows = [
    { label: "Name", value: data.fullName },
    { label: "Email", value: data.email },
    { label: "Website", value: data.website || "—" },
    { label: "Phone", value: data.phone || "—" },
    { label: "Location", value: data.location || "—" },
    { label: "Budget", value: data.budget || "—" },
  ];

  const tableRows = rows
    .map(
      (r) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#374151;white-space:nowrap;vertical-align:top">${r.label}</td><td style="padding:8px 12px;color:#111">${r.value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:32px 0">
      <h2 style="font-size:20px;font-weight:600;color:#111;margin:0 0 24px">New Contact Form Submission</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        <tbody>${tableRows}</tbody>
      </table>
      <div style="margin-top:24px;padding:16px;background:#f9fafb;border-radius:8px">
        <p style="margin:0 0 8px;font-weight:600;color:#374151;font-size:14px">Message</p>
        <p style="margin:0;color:#111;font-size:14px;line-height:1.6;white-space:pre-wrap">${data.message}</p>
      </div>
      <p style="margin-top:24px;font-size:12px;color:#9ca3af">Sent from solaraai.com contact form</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!data.fullName?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  const response = await fetch(SENDGRID_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: TO_EMAIL }],
          subject: `New contact: ${data.fullName} — ${data.email}`,
        },
      ],
      from: { email: FROM_EMAIL, name: FROM_NAME },
      reply_to: { email: data.email, name: data.fullName },
      content: [
        { type: "text/html", value: buildHtml(data) },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    console.error("SendGrid error:", response.status, errorText);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
