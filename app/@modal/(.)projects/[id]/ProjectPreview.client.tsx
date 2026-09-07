'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import { fetchProjectById } from '@/lib/api/projects';
import Image from 'next/image';
import css from '@/components/ProjectCard/ProjectCard.module.css';

export default function ProjectPreviewClient() {
  const router = useRouter();
  const params = useParams();

  const id = typeof params?.id === 'string' ? params.id : '';

  const {
    data: project,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['project', id],
    queryFn: () => fetchProjectById(id),
    enabled: id !== '',
    refetchOnMount: false,
  });

  useEffect(() => {
    const originalTitle = document.title;
    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    if (project?.title) {
      document.title = `${project.title}`;
    }
  }, [project]);

  const handleClose = () => {
    router.back();
  };

  if (!id || isLoading) {
    return (
      <Modal onClose={handleClose}>
        <p>Loading, please wait...</p>
      </Modal>
    );
  }

  if (error || !project) {
    return (
      <Modal onClose={handleClose}>
        <p>Something went wrong.</p>
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
            alt={project.imageAlt}
            className={css.projectImage}
          ></Image>

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
