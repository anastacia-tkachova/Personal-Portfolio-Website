import { NAV_ITEMS } from '@/config/navigation';
import Link from 'next/link';

interface NavProps {
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
}

const Navigation = ({
  listClassName = '',
  itemClassName = '',
  linkClassName = '',
}: NavProps) => {
  return (
    <ul className={listClassName}>
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={href} className={itemClassName}>
          <Link href={href} className={linkClassName}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
