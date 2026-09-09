import { NAV_ITEMS } from '@/config/navigation';
import { Language } from '@/types/project';
import Link from 'next/link';

interface NavProps {
  lang: Language;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
}

const Navigation = ({
  lang,
  listClassName = '',
  itemClassName = '',
  linkClassName = '',
}: NavProps) => {
  return (
    <ul className={listClassName}>
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={href} className={itemClassName}>
          <Link href={href} className={linkClassName}>
            {label[lang]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
