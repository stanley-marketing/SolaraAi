"use client";

import React from "react";

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Liquid Glass effect wrapper.
 * Applies Apple-style frosted glass with SVG distortion,
 * specular highlights, and layered translucency.
 */
export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={`liquid-glass ${className}`}
      style={{
        boxShadow:
          "0 6px 6px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.08)",
        transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        ...style,
      }}
    >
      {/* Distortion layer */}
      <div
        className="liquid-glass-distortion"
        aria-hidden="true"
      />
      {/* Tint layer */}
      <div
        className="liquid-glass-tint"
        aria-hidden="true"
      />
      {/* Inner-shadow highlight layer */}
      <div
        className="liquid-glass-highlight"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="liquid-glass-content">{children}</div>
    </div>
  );
};

/**
 * SVG filter that powers the glass distortion.
 * Render once at page level (e.g. in layout or a top-level wrapper).
 */
export const LiquidGlassFilter: React.FC = () => (
  <svg
    style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    aria-hidden="true"
  >
    <filter
      id="glass-distortion"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.001 0.005"
        numOctaves="1"
        seed="17"
        result="turbulence"
      />
      <feComponentTransfer in="turbulence" result="mapped">
        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
      </feComponentTransfer>
      <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
      <feSpecularLighting
        in="softMap"
        surfaceScale="5"
        specularConstant="1"
        specularExponent="100"
        lightingColor="white"
        result="specLight"
      >
        <fePointLight x="-200" y="-200" z="300" />
      </feSpecularLighting>
      <feComposite
        in="specLight"
        operator="arithmetic"
        k1="0"
        k2="1"
        k3="1"
        k4="0"
        result="litImage"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="softMap"
        scale="200"
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  </svg>
);
