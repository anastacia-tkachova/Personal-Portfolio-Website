export interface NavItem {
  label: { en: string; ua: string };
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: { en: 'Home', ua: 'Головна' }, href: '/' },
  { label: { en: 'About Me', ua: 'Про мене' }, href: '/#about' },
  { label: { en: 'My Projects', ua: 'Мої проекти' }, href: '/#projects' },
  { label: { en: 'Contacts', ua: 'Контакти' }, href: '/#contacts' },
  { label: { en: 'My Education', ua: 'Моя освіта' }, href: '/#education' },
];
