export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  bio: string;
  avatarUrl?: string;
}
