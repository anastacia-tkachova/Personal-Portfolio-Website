import css from './Header.module.css';
import { Icon } from '../ui/Icon/Icon';
import Navigation from '../ui/Navigation/Navigation';
import SocialLinks from '../ui/SocialLinks/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';
import { LangToggle } from '../ui/LangToggle/LangToggle';
import { Language } from '@/types/project';

interface HeaderProps {
  lang: Language;
}

const Header = ({ lang }: HeaderProps) => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoLink}>
        <Icon name="logoWithoutDot" />
      </Link>

      <nav aria-label="Main Navigation" className={css.headerNav}>
        <Navigation
          lang={lang}
          listClassName={css.headerNavList}
          itemClassName={css.headerNavItem}
          linkClassName={css.headerNavLink}
        />
      </nav>

      <div className={css.headerOptions}>
        <SocialLinks
          containerClassName={css.headerSocials}
          linkClassName={css.headerSocialLink}
          iconClassName={css.headerSocialIcon}
        />

        <div className={css.headerOptionSettings}>
          <div className={css.headerOptionSettings}>
            <LangToggle currentLang={lang} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
