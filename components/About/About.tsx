import Image from 'next/image';
import css from './About.module.css';
import { Icon } from '../ui/Icon/Icon';
import { getCurrentLang } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/getDictionary';

const About = async () => {
  const lang = await getCurrentLang();
  const dict = await getDictionary(lang);

  return (
    <section className={css.about}>
      <Image
        src=""
        alt={dict.about.imageAlt}
        width={320}
        height={320}
        className={css.aboutImage}
        priority
      />

      <div className={css.aboutContent}>
        <h2 className={css.aboutTitle}>{dict.about.title}</h2>

        <div className={css.aboutContentText}>
          <p className={css.aboutText}>
            {dict.about.greeting1}
            <span className={css.aboutFocus}>{dict.about.greeting2}</span>
            {dict.about.greeting3}
          </p>
          <p className={css.aboutText}>
            {dict.about.article1}
            <span className={css.aboutFocus}>{dict.about.article2}</span>
            {dict.about.article3}
            <span className={css.aboutFocus}>{dict.about.article4}</span>
            {dict.about.article5}
            <span className={css.aboutFocus}>{dict.about.article6}</span>
            {dict.about.article7}
            <span className={css.aboutFocus}>{dict.about.article8}</span>
            {dict.about.article9}
          </p>
          <p className={css.aboutText}>
            {dict.about.listStart1}
            <span className={css.aboutFocus}>{dict.about.listStart2}</span>
            {dict.about.listStart3}
          </p>

          <ul>
            <li>
              <Icon name="listStar" className={css.aboutListStar} />
              <p className={css.aboutText}>
                <span className={css.aboutFocus}>
                  {dict.about.firstListItem1}
                </span>
                {dict.about.firstListItem2}
              </p>
            </li>

            <li>
              <Icon name="listStar" className={css.aboutListStar} />
              <p className={css.aboutText}>
                <span className={css.aboutFocus}>
                  {dict.about.secondListItem1}
                </span>
                {dict.about.secondListItem2}
              </p>
            </li>

            <li>
              <Icon name="listStar" className={css.aboutListStar} />
              <p className={css.aboutText}>
                <span className={css.aboutFocus}>
                  {dict.about.thirdListItem1}
                </span>
                {dict.about.thirdListItem2}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
