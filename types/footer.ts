// types/footer.ts

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: "linkedin" | "github" | "behance";
  label: string;
  href: string;
}

export interface FooterData {
  logoText: string;
  tagline: string;
  copyright: string;
  navigationTitle: string;
  socialsTitle: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}