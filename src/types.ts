export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g. "Reformed Member", "Family Member", "Community Leader"
  story: string;
  quote: string;
  year: string;
  avatarUrl: string;
}

export interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  date: string;
  isAnonymous: boolean;
  prayerCount: number;
  category: "Healing" | "Recovery" | "Strength" | "Guidance" | "General";
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: "Pending" | "Addressed";
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
  category: "Worship" | "Rehab" | "Fellowship" | "Outreach";
}
