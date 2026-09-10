import css from './ProjectCard.module.css';
import Image from 'next/image';
import { Project } from '@/types/project';
import Link from 'next/link';
import clsx from 'clsx';

interface ProjectCardProps {
  project: Project;
  isModal?: boolean;
  isList?: boolean;
}

const ProjectCard = ({
  project,
  isModal = false,
  isList = false,
}: ProjectCardProps) => {
  const articleClassName = clsx(css.article, {
    [css.featured]: project.featured,
  });

  return (
    <article className={articleClassName}>
      <div className={css.imageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className={css.projectImage}
        />

        <ul className={css.projectTagList}>
          {project.tags.map(tag => (
            <li key={tag} className={css.projectTagItem}>
              <p className={css.projectTagLabel}>{tag}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={css.projectTextArea}>
        <h3 className={css.projectTitle}>{project.title}</h3>

        {isModal && <p className={css.projectArticleText}>{project.article}</p>}

        {isList && (
          <p className={css.projectDescription}>{project.description}</p>
        )}
      </div>

      <div className={css.projectButtonList}>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={css.projectButton}
        >
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={css.projectButton}
        >
          GitHub Code
        </a>

        {isList && (
          <Link
            href={`/projects/${project.id}`}
            className={css.projectDetailButton}
            scroll={false}
          >
            Details
          </Link>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
