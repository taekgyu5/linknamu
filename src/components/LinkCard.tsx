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
      className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:bg-zinc-50 active:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
    >
      {link.label}
    </a>
  );
}
