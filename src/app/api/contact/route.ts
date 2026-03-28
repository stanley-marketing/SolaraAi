import { NextResponse } from "next/server";
import { createHash } from "crypto";

const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";
const TO_EMAIL = "ilay.mor@solaraai.com";
const FROM_EMAIL = "contact@solaraai.com";
const FROM_NAME = "Solara AI Website";

const META_PIXEL_ID = "1793843038203358";
const META_CAPI_URL = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`;

const CALENDLY_BASE = "https://calendly.com/ilay-mor-solaraai/45-minute-meeting-full-stack-marketing-manageme-clone";

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

  let body: ContactPayload & { _hp?: string; _t?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (body._hp) {
    return NextResponse.json({ success: true });
  }

  const MIN_SUBMIT_MS = 3000;
  if (!body._t || Date.now() - body._t < MIN_SUBMIT_MS) {
    return NextResponse.json({ success: true });
  }

  const { _hp, _t, ...data } = body;

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

  const capiToken = process.env.META_CAPI_TOKEN;
  if (capiToken) {
    const hashedEmail = createHash("sha256")
      .update(data.email.trim().toLowerCase())
      .digest("hex");

    const eventData = {
      data: [
        {
          event_name: "Lead",
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: "https://solaraai.com/contact",
          user_data: {
            em: [hashedEmail],
            ...(data.phone && {
              ph: [
                createHash("sha256")
                  .update(data.phone.replace(/\D/g, ""))
                  .digest("hex"),
              ],
            }),
            client_user_agent: request.headers.get("user-agent") || "",
          },
          custom_data: {
            content_name: "Contact Form",
            content_category: "lead",
            budget: data.budget || "",
            location: data.location || "",
          },
        },
      ],
      access_token: capiToken,
    };

    fetch(META_CAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    }).catch((err) => console.error("Meta CAPI error:", err));
  }

  const twilioSid = process.env.TWILIO_ACCOUNT_SID;
  const twilioToken = process.env.TWILIO_AUTH_TOKEN;
  const twilioFrom = process.env.TWILIO_PHONE_NUMBER;

  if (twilioSid && twilioToken && twilioFrom && data.phone) {
    const phone = data.phone.replace(/[^\d+]/g, "");
    if (phone.length >= 10) {
      const firstName = data.fullName.split(" ")[0];
      const calendlyLink = `${CALENDLY_BASE}?name=${encodeURIComponent(data.fullName)}&email=${encodeURIComponent(data.email)}`;
      const smsBody = `Hi ${firstName}! Thanks for reaching out to Solara AI. Book your free strategy call here: ${calendlyLink} — Team Solara`;

      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      const params = new URLSearchParams({
        To: phone.startsWith("+") ? phone : `+${phone}`,
        From: twilioFrom,
        Body: smsBody,
      });

      fetch(twilioUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }).catch((err) => console.error("Twilio SMS error:", err));
    }
  }

  return NextResponse.json({ success: true });
}
