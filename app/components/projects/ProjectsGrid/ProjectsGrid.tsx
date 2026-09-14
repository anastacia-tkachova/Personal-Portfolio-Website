import css from './ProjectsGrid.module.css';
import { Project } from '@/types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import clsx from 'clsx';
import { Dictionary } from '@/lib/i18n/getDictionary';
import Link from 'next/link';

export interface ProjectGridProps {
  projects: Project[];
  dict: Dictionary;
  isMainPage?: boolean;
}

const ProjectGrid = ({
  projects,
  dict,
  isMainPage = false,
}: ProjectGridProps) => {
  if (!projects || projects.length === 0) {
    return (
      <div className={css.emptyState}>
        <p>{dict.projects.notFound}</p>
      </div>
    );
  }

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  const sortedProjects = [...featuredProjects, ...regularProjects];

  const displayedProjects = isMainPage
    ? sortedProjects.slice(0, 5)
    : sortedProjects;

  return (
    <ul className={css.projectList}>
      {displayedProjects.map(project => (
        <li
          key={project.id}
          className={clsx(css.projectItem, {
            [css.featuredItem]: project.featured,
          })}
        >
          <ProjectCard
            project={project}
            dict={dict}
            isModal={false}
            isList={true}
          />
        </li>
      ))}

      {isMainPage && (
        <li
          key={'linkProject'}
          className={clsx(css.projectItem, css.viewAllProject)}
        >
          <Link href="/projects" className={css.viewAllLink}>
            <p className={css.viewAllText}>{dict.projects.viewAll}</p>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default ProjectGrid;
