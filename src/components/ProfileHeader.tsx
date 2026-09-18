import Image from "next/image";
import type { Profile } from "@/types/link";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  const initial = profile.name.trim().charAt(0) || "?";

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-32 w-32">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-amber-200/70 via-amber-100/50 to-transparent blur-2xl" />
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-zinc-200 shadow-[0_10px_30px_-8px_rgba(180,120,50,0.45)] ring-4 ring-white/90">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              sizes="128px"
              priority
              className="object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-zinc-500">
              {initial}
            </span>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
          {profile.name}
        </h1>
        <p className="mt-1.5 text-sm text-[var(--muted)]">{profile.bio}</p>
      </div>
    </div>
  );
}
