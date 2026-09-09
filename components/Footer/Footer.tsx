import css from './Footer.module.css';
import Navigation from '../ui/Navigation/Navigation';
import SocialLinks from '../ui/SocialLinks/SocialLinks';
import { getCurrentLang } from '@/lib/i18n/server';
import { LangToggle } from '../ui/LangToggle/LangToggle';

const Footer = async () => {
  const lang = await getCurrentLang();

  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <nav className={css.footerNav}>
          <Navigation
            lang={lang}
            listClassName={css.footerNavList}
            itemClassName={css.footerNavItem}
            linkClassName={css.footerNavLink}
          />
        </nav>

        <div className={css.footerOptions}>
          <SocialLinks
            containerClassName={css.headerSocials}
            linkClassName={css.headerSocialLink}
            iconClassName={css.headerSocialIcon}
          />
          <div className={css.footerOptionSettings}>
            <div className={css.footerOptionSettings}>
              <LangToggle currentLang={lang} />
            </div>
          </div>
        </div>

        <div className={css.footerOwner}>
          <p className={css.footerOwnerText}>About this Portfolio:</p>

          <p className={css.footerOwnerText}>
            Built with Next.js (App Router), TypeScript, Tailwind CSS &
            next-themes. Designed with i18n support and responsive layout.
          </p>

          <a
            href="mailto:anastasia.tkachova.js@gmail.com"
            className={css.footerOwnerEmail}
          >
            anastasia.tkachova.js@gmail.com
          </a>
        </div>
      </div>

      <p className={css.rights}>
        © 2026 Anastasia Tkachova. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
