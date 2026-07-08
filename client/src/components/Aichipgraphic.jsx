import React from "react";

export default function AIChipGraphic({ className = "" }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AI chip illustration"
    >
      <defs>
        <linearGradient id="chipGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2a63" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#151d45" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#0c1230" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="chipEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
        <radialGradient id="chipGlow" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="baseGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* ambient glow behind everything */}
      <circle cx="160" cy="160" r="150" fill="url(#chipGlow)" />

      {/* circuit traces reaching to the four corner callouts */}
      <g stroke="#6366f1" strokeOpacity="0.55" strokeWidth="2" fill="none">
        <path d="M110 90 L70 90 L70 50" />
        <path d="M210 90 L250 90 L250 50" />
        <path d="M110 230 L70 230 L70 270" />
        <path d="M210 230 L250 230 L250 270" />
      </g>
      <g fill="#a5b4fc">
        <circle cx="70" cy="50" r="3.5" />
        <circle cx="250" cy="50" r="3.5" />
        <circle cx="70" cy="270" r="3.5" />
        <circle cx="250" cy="270" r="3.5" />
      </g>

      {/* chip pins */}
      <g stroke="#818cf8" strokeWidth="3" strokeLinecap="round">
        <line x1="130" y1="82" x2="130" y2="98" />
        <line x1="150" y1="82" x2="150" y2="98" />
        <line x1="170" y1="82" x2="170" y2="98" />
        <line x1="190" y1="82" x2="190" y2="98" />

        <line x1="130" y1="222" x2="130" y2="238" />
        <line x1="150" y1="222" x2="150" y2="238" />
        <line x1="170" y1="222" x2="170" y2="238" />
        <line x1="190" y1="222" x2="190" y2="238" />

        <line x1="82" y1="130" x2="98" y2="130" />
        <line x1="82" y1="150" x2="98" y2="150" />
        <line x1="82" y1="170" x2="98" y2="170" />
        <line x1="82" y1="190" x2="98" y2="190" />

        <line x1="222" y1="130" x2="238" y2="130" />
        <line x1="222" y1="150" x2="238" y2="150" />
        <line x1="222" y1="170" x2="238" y2="170" />
        <line x1="222" y1="190" x2="238" y2="190" />
      </g>

      {/* glassmorphic chip body */}
      <rect
        x="98"
        y="98"
        width="124"
        height="124"
        rx="20"
        fill="url(#chipGlass)"
        stroke="url(#chipEdge)"
        strokeWidth="1.5"
      />
      <rect
        x="98"
        y="98"
        width="124"
        height="46"
        rx="20"
        fill="white"
        opacity="0.06"
      />

      {/* AI wordmark */}
      <text
        x="160"
        y="172"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="34"
        fill="url(#chipEdge)"
      >
        AI
      </text>

      {/* base platform glow */}
      <ellipse cx="160" cy="292" rx="90" ry="14" fill="url(#baseGlow)" filter="url(#softBlur)" />
    </svg>
  );
}