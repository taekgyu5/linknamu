"use client";

import type { LinkItem } from "@/types/link";

export default function LinkCard({ link }: { link: LinkItem }) {
  const recordClick = () => {
    fetch(`/api/links/${link.id}/click`, { method: "POST", keepalive: true }).catch(() => {});
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-sm font-medium text-[var(--foreground)] shadow-[0_4px_16px_-4px_rgba(180,120,50,0.2)] backdrop-blur-md transition-all duration-200 hover:bg-white/60 hover:shadow-[0_6px_20px_-4px_rgba(180,120,50,0.28)] active:bg-white/70"
    >
      {link.icon && <span aria-hidden>{link.icon}</span>}
      {link.label}
    </a>
  );
}
