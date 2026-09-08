'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
import Modal from '@/components/ui/Modal/Modal';
import type { Language } from '@/types/project';
import css from '@/components/ProjectCard/ProjectCard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchProjectById } from '@/lib/api/projects';

interface Props {
  id: string;
  lang: Language;
}

export default function ProjectPreviewClient({ id, lang }: Props) {
  const router = useRouter();

  const { data: project, error } = useQuery({
    queryKey: ['project', id, lang],
    queryFn: () => fetchProjectById(id, lang),
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    const originalTitle = document.title;
    if (project?.title) {
      document.title = project.title;
    }
    return () => {
      document.title = originalTitle;
    };
  }, [project?.title]);

  const handleClose = () => {
    router.back();
  };

  if (error || !project) {
    return (
      <Modal onClose={handleClose}>
        <div className={css.container}>
          <p>Something went wrong while loading project details.</p>
          <button className={css.backBtn} onClick={handleClose}>
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <div className={css.container}>
        <button className={css.backBtn} onClick={handleClose}>
          Close
        </button>

        <div className={css.projectImageArea}>
          <Image
            src={project.image}
            alt={project.imageAlt || project.title}
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
          <h2 className={css.projectTitle}>{project.title}</h2>
          <p className={css.projectText}>{project.article}</p>
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
        </div>
      </div>
    </Modal>
  );
}
