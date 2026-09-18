import type { LinkItem, Profile } from "@/types/link";

export const profile: Profile = {
  name: "오택규",
  bio: "여행가 | 꿈을 찾아 보아요.",
  avatarUrl: "https://placehold.co/256x256/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/taekgyu5", icon: "💻" },
  { id: "blog", label: "Blog", url: "https://blog.naver.com/luygkeat", icon: "✏️" },
  { id: "email", label: "Email", url: "mailto:rivon159@naver.com", icon: "📧" },
];
