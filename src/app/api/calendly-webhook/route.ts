import { NextResponse } from "next/server";
import { createHash } from "crypto";

const META_PIXEL_ID = "1793843038203358";
const META_CAPI_URL = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`;

export async function POST(request: Request) {
  let body: {
    event?: string;
    payload?: {
      invitee?: {
        email?: string;
        name?: string;
        uri?: string;
      };
      event?: {
        uri?: string;
        name?: string;
      };
      tracking?: {
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        utm_content?: string;
      };
    };
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (body.event !== "invitee.created") {
    return NextResponse.json({ ok: true });
  }

  const invitee = body.payload?.invitee;
  if (!invitee?.email) {
    return NextResponse.json({ ok: true });
  }

  const capiToken = process.env.META_CAPI_TOKEN;
  if (capiToken) {
    const hashedEmail = createHash("sha256")
      .update(invitee.email.trim().toLowerCase())
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
            client_user_agent: request.headers.get("user-agent") || "",
          },
          custom_data: {
            content_name: "Calendly Booking",
            content_category: "lead",
            lead_name: invitee.name || "",
            event_type: body.payload?.event?.name || "",
            ...(body.payload?.tracking?.utm_source && {
              utm_source: body.payload.tracking.utm_source,
              utm_medium: body.payload.tracking.utm_medium || "",
              utm_campaign: body.payload.tracking.utm_campaign || "",
            }),
          },
        },
      ],
      access_token: capiToken,
    };

    const response = await fetch(META_CAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventData),
    });

    if (!response.ok) {
      const err = await response.text().catch(() => "Unknown");
      console.error("Meta CAPI error on Calendly webhook:", response.status, err);
    }
  }

  return NextResponse.json({ ok: true });
}
