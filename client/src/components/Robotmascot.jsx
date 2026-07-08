import React from "react";

export default function RobotMascot({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Friendly robot mascot"
    >
      <defs>
        <linearGradient id="robotBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e6e9f5" />
        </linearGradient>
        <linearGradient id="robotHead" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eef0fa" />
        </linearGradient>
      </defs>

      {/* antenna */}
      <line x1="100" y1="10" x2="100" y2="28" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="8" r="6" fill="#4f46e5" />

      {/* head */}
      <rect x="62" y="28" width="76" height="62" rx="22" fill="url(#robotHead)" stroke="#c7ccf0" strokeWidth="1.5" />
      {/* face screen */}
      <rect x="74" y="42" width="52" height="34" rx="12" fill="#1e2a63" />
      <circle cx="92" cy="59" r="6" fill="#60a5fa" />
      <circle cx="112" cy="59" r="6" fill="#60a5fa" />
      {/* ears */}
      <rect x="52" y="48" width="10" height="20" rx="5" fill="#c7ccf0" />
      <rect x="138" y="48" width="10" height="20" rx="5" fill="#c7ccf0" />

      {/* neck */}
      <rect x="92" y="88" width="16" height="10" fill="#c7ccf0" />

      {/* body */}
      <rect x="50" y="98" width="100" height="86" rx="26" fill="url(#robotBody)" stroke="#c7ccf0" strokeWidth="1.5" />
      {/* chest light */}
      <circle cx="100" cy="132" r="14" fill="#eef0fa" stroke="#4f46e5" strokeWidth="2" />
      <circle cx="100" cy="132" r="6" fill="#4f46e5" />
      <line x1="72" y1="158" x2="128" y2="158" stroke="#d7dafb" strokeWidth="3" strokeLinecap="round" />

      {/* left arm - waving */}
      <path
        d="M50 112 C 26 108, 14 88, 20 66"
        fill="none"
        stroke="#c7ccf0"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="20" cy="64" r="10" fill="url(#robotBody)" stroke="#c7ccf0" strokeWidth="1.5" />

      {/* right arm - resting */}
      <path
        d="M150 116 C 172 122, 180 142, 174 162"
        fill="none"
        stroke="#c7ccf0"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <circle cx="175" cy="164" r="10" fill="url(#robotBody)" stroke="#c7ccf0" strokeWidth="1.5" />

      {/* legs */}
      <rect x="66" y="184" width="18" height="34" rx="8" fill="#c7ccf0" />
      <rect x="116" y="184" width="18" height="34" rx="8" fill="#c7ccf0" />
      <ellipse cx="75" cy="222" rx="16" ry="7" fill="#9aa1e0" />
      <ellipse cx="125" cy="222" rx="16" ry="7" fill="#9aa1e0" />
    </svg>
  );
}