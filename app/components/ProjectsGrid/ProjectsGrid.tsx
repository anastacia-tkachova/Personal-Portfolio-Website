import css from './ProjectsGrid.module.css';
import { Project } from '@/types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import clsx from 'clsx';
import { Dictionary } from '@/lib/i18n/getDictionary';

export interface ProjectGridProps {
  projects: Project[];
  dict: Dictionary;
}

const ProjectGrid = ({ projects, dict }: ProjectGridProps) => {
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
