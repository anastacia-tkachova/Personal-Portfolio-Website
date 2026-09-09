import css from './Hero.module.css';
import LiveCodeModule from '../LiveCodeModule/LiveCodeModule';
import Link from 'next/link';
import { getCurrentLang } from '@/lib/i18n/server';
import { getDictionary } from '@/lib/i18n/getDictionary';

const Hero = async () => {
  const lang = await getCurrentLang();
  const dict = await getDictionary(lang);

  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.heroContent}>
          <h1 className={css.heroContentTitle}>{dict.hero.title}</h1>
          <p className={css.heroContentText}>{dict.hero.description}</p>

          <div className={css.heroButtonList}>
            <Link href={'/#projects'} className={css.heroButton}>
              {dict.hero.btn1}
            </Link>
            <Link href={'/#contacts'} className={css.heroButton}>
              {dict.hero.btn2}
            </Link>
          </div>
        </div>

        <LiveCodeModule />
      </div>
    </section>
  );
};

export default Hero;
