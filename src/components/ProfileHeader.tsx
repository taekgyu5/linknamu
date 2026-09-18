import Image from "next/image";
import type { Profile } from "@/types/link";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  const initial = profile.name.trim().charAt(0) || "?";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
        {profile.avatarUrl ? (
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-3xl font-semibold text-zinc-500 dark:text-zinc-300">
            {initial}
          </span>
        )}
      </div>
      <div>
        <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{profile.bio}</p>
      </div>
    </div>
  );
}
