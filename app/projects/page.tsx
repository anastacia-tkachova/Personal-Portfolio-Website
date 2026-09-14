import { getCurrentLang } from '@/lib/i18n/server';
import { fetchAllProjects } from '@/lib/api/projects';
import { getDictionary } from '@/lib/i18n/getDictionary';
import css from '../components/ProjectsGrid/ProjectsGrid.module.css';
import ProjectGrid from '../components/projects/ProjectsGrid/ProjectsGrid';

export default async function ProjectPage() {
  const lang = await getCurrentLang();
  const dict = await getDictionary(lang);
  const projects = await fetchAllProjects(lang);

  if (!projects || projects.length === 0) {
    return (
      <div className={css.projectsGridError}>
        <p>{dict.projects.projectsError}</p>
      </div>
    );
  }

  return (
    <main className={css.main}>
      <div className={css.container}>
        <ProjectGrid projects={projects} dict={dict} />
      </div>
    </main>
  );
}
