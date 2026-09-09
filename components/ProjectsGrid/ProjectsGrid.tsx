import css from './ProjectsGrid.module.css';
import { Language, Project } from '@/types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import clsx from 'clsx';

export interface ProjectGridProps {
  projects: Project[];
  lang: Language;
}

const EMPTY_MESSAGES: Record<Language, string> = {
  en: 'No projects found.',
  ua: 'Проєкти не знайдені.',
};

const ProjectGrid = ({ projects, lang }: ProjectGridProps) => {
  if (!projects || projects.length === 0) {
    return (
      <div className={css.emptyState}>
        <p>{EMPTY_MESSAGES[lang]}</p>
      </div>
    );
  }

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  const sortedProjects = [...featuredProjects, ...regularProjects];

  return (
    <ul className={css.projectList}>
      {sortedProjects?.map(project => (
        <li
          key={project.id}
          className={clsx(css.projectItem, {
            [css.featuredItem]: project.featured,
          })}
        >
          <ProjectCard project={project} isModal={false} isList={true} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectGrid;
