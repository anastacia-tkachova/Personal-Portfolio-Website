import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import SocialLinks from '../SocialLinks/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoLink}>
        <Image
          src="/logo.svg"
          alt="Site Logo"
          width={40}
          height={40}
          priority
        />
      </Link>

      <nav aria-label="Main Navigation" className={css.headerNav}>
        <Navigation
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
        <div className={css.headerOptionSettings}></div>
      </div>
    </header>
  );
};

export default Header;
