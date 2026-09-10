export interface ContactItem {
  id: string;
  label: string;
  href: string;
  alt: string;
  image_x1: string;
  image_x2: string;
}

export const CONTACTS: ContactItem[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/anastacia-tkachova',
    alt: 'GitHub Profile Preview',
    image_x1: '@/data/img/con_1x1.png',
    image_x2: '@/data/img/con_1x2.png',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anastacia-tkachova/',
    alt: 'LinkedIn Profile Preview',
    image_x1: '@/data/img/con_2x1.png',
    image_x2: '@/data/img/con_2x2.png',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/Erraika',
    alt: 'Telegram Preview',
    image_x1: '@/data/img/con_3x1.png',
    image_x2: '@/data/img/con_3x2.png',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:oracleofmiracle@gmail.com',
    alt: 'Email Card Preview',
    image_x1: '@/data/img/con_4x1.png',
    image_x2: '@/data/img/con_4x2.png',
  },
];
