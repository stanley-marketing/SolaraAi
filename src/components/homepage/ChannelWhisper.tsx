import Image from "next/image";

export function ChannelWhisper() {
  return (
    <div
      className="flex items-center gap-3"
      aria-label="Works with text and WhatsApp"
    >
      <span
        style={{
          fontSize: "0.66rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(98,98,98,0.7)",
          fontWeight: 500,
        }}
      >
        Works with
      </span>
      <span className="flex items-center gap-1.5">
        <Image
          src="/icons/sms-logo.svg"
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
        />
        <span
          style={{
            fontSize: "0.72rem",
            color: "#1c1c1e",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          Text
        </span>
      </span>
      <span
        aria-hidden="true"
        style={{ color: "#cdcdcd", fontSize: "0.7rem" }}
      >
        +
      </span>
      <span className="flex items-center gap-1.5">
        <Image
          src="/icons/whatsapp-icon.svg"
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
        />
        <span
          style={{
            fontSize: "0.72rem",
            color: "#1c1c1e",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          WhatsApp
        </span>
      </span>
    </div>
  );
}
