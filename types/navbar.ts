export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarData {
  logoText: string;
  contactBtnText: string;
  contactHref: string;
  links: NavLink[];
}

interface NavbarProps {
  data: NavbarData;
}