import { getCurrentLang } from '@/lib/i18n/server';
import css from './page.module.css';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { fetchAllProjects } from '@/lib/api/projects';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectGrid from './components/ProjectsGrid/ProjectsGrid';
import Contacts from './components/Contacts/Contacts';
import Education from './components/Education/Education';
import { Language } from '@/types/project';

const MainPage = async () => {
  const lang = (await getCurrentLang()) as Language;
  const [dict, projects] = await Promise.all([
    getDictionary(lang),
    fetchAllProjects(lang),
  ]);

  return (
    <main className={css.main}>
      <Hero dict={dict} />

      <About dict={dict} />

      <ProjectGrid projects={projects} dict={dict} />

      <Contacts dict={dict} />

      <Education dict={dict} />
    </main>
  );
};

export default MainPage;
