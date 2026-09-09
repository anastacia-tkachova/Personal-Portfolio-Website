'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Modal from '@/components/ui/Modal/Modal';
import type { Language } from '@/types/project';
import css from '@/components/ProjectCard/ProjectCard.module.css';
import { useQuery } from '@tanstack/react-query';
import { fetchProjectById } from '@/lib/api/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

interface Props {
  id: string;
  lang: Language;
}

export default function ProjectPreviewClient({ id, lang }: Props) {
  const router = useRouter();

  const {
    data: project,
    isLoading,
    isError,
  } = useQuery({
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

  if (isLoading) {
    return (
      <Modal onClose={handleClose}>
        <div className={css.container}>
          <p>Loading project details...</p>
        </div>
      </Modal>
    );
  }

  if (isError || !project) {
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

        <ProjectCard project={project} isModal={true} isList={false} />
      </div>
    </Modal>
  );
}
