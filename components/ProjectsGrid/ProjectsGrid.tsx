import css from './ProjectsGrid.module.css';
import { Project } from '@/types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import clsx from 'clsx';

export interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (!projects || projects.length === 0) {
    return (
      <div className={css.emptyState}>
        <p>No projects found.</p>
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
