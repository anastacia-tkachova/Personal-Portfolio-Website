import Image from 'next/image';
import css from './About.module.css';
import { Icon } from '../ui/Icon/Icon';

const About = () => {
  return (
    <section className={css.about}>
      <Image
        src=""
        alt="Anastacia - Full Stack Developer"
        width={320}
        height={320}
        className={css.aboutImage}
        priority
      />

      <div className={css.aboutContent}>
        <h2 className={css.aboutTitle}>About Me</h2>

        <div className={css.aboutContentText}>
          <p className={css.aboutText}>
            Hi, I&apos;m <span className={css.aboutFocus}>Anastacia</span>!
          </p>
          <p className={css.aboutText}>
            I am a <span className={css.aboutFocus}>Full Stack Developer</span>{' '}
            and <span className={css.aboutFocus}>Digital Artist</span> who
            builds web applications from the ground up by combining
            <span className={css.aboutFocus}>React</span> &{' '}
            <span className={css.aboutFocus}>Next.js</span> flexibility with
            Node.js architecture. Moving from simple scripts to deploying
            full-scale production applications, I bridge the gap between complex
            engineering logic and clean, pixel-perfect design.
          </p>
          <p className={css.aboutText}>
            What I <span className={css.aboutFocus}>focus on</span>:
          </p>

          <ul>
            <li>
              <Icon name="listStar" className={css.aboutListStar} />
              <p className={css.aboutText}>
                <span className={css.aboutFocus}>Frontend Precision</span>:
                Responsive UI/UX, advanced server-state management (TanStack
                Query), and seamless interactions.
              </p>
            </li>

            <li>
              <Icon name="listStar" className={css.aboutListStar} />
              <p className={css.aboutText}>
                <span className={css.aboutFocus}>Backend & Security</span>:
                Scalable Node.js architectures, complex REST APIs, and strict
                authentication layers.
              </p>
            </li>

            <li>
              <Icon name="listStar" className={css.aboutListStar} />
              <p className={css.aboutText}>
                <span className={css.aboutFocus}>Engineering Mindset</span>:
                Clean code, performance optimization, disciplined Git workflow,
                and creative problem-solving.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
