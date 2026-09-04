import css from './Hero.module.css';
import LiveCodeModule from '../LiveCodeModule/LiveCodeModule';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <div className={css.heroContent}>
          <h1 className={css.heroContentTitle}>
            Crafting Scalable Modern Web Applications
          </h1>
          <p className={css.heroContentText}>
            I turn complex ideas into clean, efficient, and responsive web
            solutions with Next.js and modern backend architecture.
          </p>

          <div className={css.heroButtonList}>
            <Link href={'/#projects'} className={css.heroButton}>
              View Projects!
            </Link>
            <Link href={'/#contacts'} className={css.heroButton}>
              Let&apos;s Connect!
            </Link>
          </div>
        </div>

        <LiveCodeModule />
      </div>
    </section>
  );
};

export default Hero;
