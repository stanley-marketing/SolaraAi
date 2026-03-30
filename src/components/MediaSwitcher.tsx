"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Permanent_Marker } from "next/font/google";

const graffitiFont = Permanent_Marker({ weight: "400", subsets: ["latin"] });

const MEDIA_ITEMS = [
  { label: "Video Ad" },
  { label: "Feed Post" },
  { label: "Carousel" },
];

const MEDIA_DURATION = 6000;

export default function MediaSwitcher() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % MEDIA_ITEMS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, MEDIA_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, activeIndex, next]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.muted = isMuted;
        video.play().catch(() => {});
      } else {
        video.muted = true;
        video.pause();
      }
    });
  }, [isMuted, activeIndex]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Tab row */}
      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #eaecf0" }}>
        {MEDIA_ITEMS.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActiveIndex(i)}
            style={{
              padding: "12px 20px",
              cursor: "pointer",
              background: "none",
              border: "none",
              borderBottom: i === activeIndex ? "2px solid #1d2939" : "2px solid transparent",
              fontWeight: i === activeIndex ? 600 : 400,
              color: i === activeIndex ? "#1d2939" : "#98a2b3",
              fontSize: 13,
              letterSpacing: "0.5px",
              position: "relative",
              overflow: "hidden",
              transition: "color 0.2s",
            }}
          >
            {item.label}
            {i === activeIndex && !isPaused && (
              <span
                key={activeIndex}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 2,
                  background: "#1d2939",
                  animation: `ms-progress ${MEDIA_DURATION}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar keyframes */}
      <style>{`@keyframes ms-progress{from{width:0}to{width:100%}}`}</style>

      {/* Media container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: 0,
          overflow: "hidden",
          background: "#0a0a0a",
        }}
      >
        {/* Media items */}
        {MEDIA_ITEMS.map((_, i) => (
          <div
            key={i}
            style={{
              position: i === 0 ? "relative" : "absolute",
              inset: 0,
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s ease",
              pointerEvents: activeIndex === i ? "auto" : "none",
              display: "flex",
              width: "100%",
              height: "100%",
            }}
          >
            {i === 0 && (
              /* Video Ad — 3-column layout: left bar | video | right bar */
              <div style={{ display: "flex", width: "100%", height: "100%" }}>
                {/* Left black bar with text */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "black" }}>
                  <span
                    className={graffitiFont.className}
                    style={{
                      transform: "rotate(-4deg)",
                      fontSize: "clamp(10px, 1.1vw, 18px)",
                      color: "rgba(255,255,255,0.75)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      textShadow: "0 0 20px rgba(139,92,246,0.5), 0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Your Presenter
                  </span>
                </div>
                {/* Center video */}
                <video
                  ref={(el) => { videoRefs.current[0] = el; }}
                  src="/creatives/ilay-lipsync.mp4"
                  poster="/creatives/ilay-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  style={{ height: "100%" }}
                />
                {/* Right black bar with text */}
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "black" }}>
                  <span
                    className={graffitiFont.className}
                    style={{
                      transform: "rotate(4deg)",
                      fontSize: "clamp(10px, 1.1vw, 18px)",
                      color: "rgba(255,255,255,0.75)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      textShadow: "0 0 20px rgba(139,92,246,0.5), 0 2px 4px rgba(0,0,0,0.8)",
                    }}
                  >
                    Your Presenter
                  </span>
                </div>
              </div>
            )}
            {i === 1 && (
              <video
                ref={(el) => { videoRefs.current[1] = el; }}
                src="/creatives/info-graphic.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
            {i === 2 && (
              <img
                src="/creatives/carousel-ad.webp"
                alt="Carousel ad creative"
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        ))}

        {/* Mute/Unmute button */}
        <button
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          onClick={() => setIsMuted((m) => !m)}
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backdropFilter: "blur(8px)",
            transition: "background 0.2s",
            zIndex: 10,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
}
