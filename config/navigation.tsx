export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/#about' },
  { label: 'My Projects', href: '/#projects' },
  { label: 'Contacts', href: '/#contacts' },
  { label: 'My Education', href: '/#education' },
];
