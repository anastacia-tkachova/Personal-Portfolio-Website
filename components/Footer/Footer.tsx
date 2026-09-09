import css from './Footer.module.css';
import Navigation from '../ui/Navigation/Navigation';
import SocialLinks from '../ui/SocialLinks/SocialLinks';
import { LangToggle } from '../ui/LangToggle/LangToggle';
import { Language } from '@/types/project';
import { Dictionary } from '@/lib/i18n/getDictionary';

export interface FooterProps {
  lang: Language;
  dict: Dictionary;
}

const Footer = ({ lang, dict }: FooterProps) => {
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
          <p className={css.footerOwnerText}>{dict.footer.title}</p>

          <p className={css.footerOwnerText}>{dict.footer.description}</p>

          <a
            href="mailto:anastasia.tkachova.js@gmail.com"
            className={css.footerOwnerEmail}
          >
            anastasia.tkachova.js@gmail.com
          </a>
        </div>
      </div>

      <p className={css.rights}>{dict.footer.rights}</p>
    </footer>
  );
};

export default Footer;
