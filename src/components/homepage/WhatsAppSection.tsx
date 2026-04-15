import { BlurFade } from "@/components/ui/blur-fade";

type MessageSender = "solara" | "user";

interface ChatMessage {
  sender: MessageSender;
  text: string;
  time: string;
}

const chatMessages: ChatMessage[] = [
  {
    sender: "solara",
    text: "Good morning! Your content plan for this week is ready. 4 pieces going out. One needs a quick recording from you — I'll send the script tomorrow. Here's the overview: [link]",
    time: "8:02 AM",
  },
  {
    sender: "solara",
    text: "Your pizza video came out great. Tap to review and approve: [link]",
    time: "2:15 PM",
  },
  {
    sender: "user",
    text: "Approved!",
    time: "2:18 PM",
  },
  {
    sender: "solara",
    text: "Published! Already getting good engagement. I'll have your weekly summary on Monday.",
    time: "2:19 PM",
  },
];

const touchpoints = [
  {
    label: "Monday morning",
    description: "Your content plan for the week arrives.",
  },
  {
    label: "Recording needed",
    description:
      "A message arrives with the script and a link. Tap, record, send. Done in under five minutes.",
  },
  {
    label: "Content ready",
    description: "A preview arrives. Approve, Give Notes, or Delete.",
  },
  {
    label: "Week's results",
    description:
      "A plain-English summary. No graphs to interpret.",
  },
];

function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "280px",
        minWidth: "280px",
        background: "#1a1a1a",
        borderRadius: "44px",
        padding: "10px",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.25), 0 0 0 10px #111",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 20px 4px",
          color: "#fff",
          fontSize: "11px",
          fontWeight: 600,
        }}
      >
        <span>9:41</span>
        <div
          style={{
            width: "28px",
            height: "8px",
            background: "#fff",
            borderRadius: "2px",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Chat screen */}
      <div
        style={{
          background: "#ECE5DD",
          borderRadius: "34px",
          overflow: "hidden",
          minHeight: "480px",
        }}
      >
        {/* WhatsApp header */}
        <div
          style={{
            background: "#075E54",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
          </div>
          <div>
            <p style={{ color: "#fff", fontSize: "13px", fontWeight: 600, margin: 0 }}>
              Solara
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "11px", margin: 0 }}>
              online
            </p>
          </div>
        </div>

        {/* Messages */}
        <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: "6px" }}>
          {chatMessages.map((msg) => (
            <div
              key={`${msg.sender}-${msg.time}`}
              style={{
                display: "flex",
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  background: msg.sender === "solara" ? "#fff" : "#DCF8C6",
                  borderRadius:
                    msg.sender === "solara"
                      ? "0 10px 10px 10px"
                      : "10px 0 10px 10px",
                  padding: "7px 10px 4px",
                  maxWidth: "78%",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#111",
                    lineHeight: 1.45,
                  }}
                >
                  {msg.text}
                </p>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: "10px",
                    color: "#999",
                    textAlign: "right",
                  }}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WhatsAppSection() {
  return (
    <section
      className="bg-shell px-6 py-24 sm:px-10 sm:py-32"
      aria-label="WhatsApp communication"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
          {/* Left: copy */}
          <div className="flex-1">
            <BlurFade delay={0}>
              <h2 className="text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]">
                It doesn&apos;t live in a dashboard.
                <br />
                <span className="text-ink-700">It lives in your phone.</span>
              </h2>
            </BlurFade>

            <BlurFade delay={0.12}>
              <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-ink-700">
                <p>
                  Software fails when it asks you to change your behavior.
                </p>
                <p>
                  You&apos;re not going to log into a new platform every morning.
                  <br />
                  You&apos;re not going to remember to check a content calendar.
                </p>
                <p>Solara works differently.</p>
                <p>
                  It reaches you. On WhatsApp or SMS. The same place you talk to
                  clients, suppliers, and your team.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div className="mt-10 space-y-5">
                {touchpoints.map((tp, i) => (
                  <div key={tp.label} className="flex gap-4">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-line bg-white">
                      <span className="text-[10px] font-semibold text-ink-900">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-ink-900">
                        {tp.label} —
                      </span>{" "}
                      <span className="text-sm text-ink-700">{tp.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </BlurFade>

            <BlurFade delay={0.28}>
              <p className="mt-10 text-sm font-medium text-ink-700">
                No login required. No dashboard to forget. A manager who
                communicates with you.
              </p>
            </BlurFade>
          </div>

          {/* Right: phone mockup */}
          <BlurFade delay={0.1} className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
