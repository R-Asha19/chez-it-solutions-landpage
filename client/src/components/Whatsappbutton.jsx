import React from "react";

// Real WhatsApp number for Chez IT Solutions (same one used elsewhere on the site).
// wa.me links work for anyone, on desktop or mobile, with no API/account setup needed —
// clicking it just opens a WhatsApp chat pre-filled with the message below.
const WHATSAPP_NUMBER = "917094640322";
const DEFAULT_MESSAGE =
  "Hi Chez IT Solutions! I'd like to know more about your AI-powered marketing services.";

export default function WhatsAppButton({ message = DEFAULT_MESSAGE }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition hover:scale-105 hover:brightness-105 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="#ffffff" aria-hidden="true">
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.42.71 4.68 1.94 6.57L4 29l7.66-1.9A11.9 11.9 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6c-1.98 0-3.83-.55-5.42-1.5l-.39-.23-4.53 1.12 1.15-4.42-.25-.4A9.55 9.55 0 0 1 6.4 15c0-5.3 4.3-9.6 9.6-9.6 5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6Zm5.27-7.18c-.29-.14-1.7-.84-1.96-.93-.26-.1-.45-.14-.64.14-.19.28-.74.93-.9 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.48-.64-.49-.16-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42s1.03 2.8 1.17 3c.14.19 1.98 3.02 4.8 4.11 2.83 1.1 2.83.73 3.34.68.5-.05 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z" />
      </svg>
    </a>
  );
}